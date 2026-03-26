import "server-only";
import { cache } from "react";
import {
  findFirstImageUrl,
  getExcerptFromHtml,
  parseKeywords,
  sanitizeZohoHtml,
  SITE_URL,
  slugify,
  stripHtml,
} from "./seo";
import {
  isZohoDeskConfigured,
  zohoDeskFetch,
  zohoDeskRootCategoryIds,
} from "./client";
import type {
  BlogCategory,
  BlogPost,
  BlogPostCard,
  BlogSlugEntry,
  ZohoDeskArticleDetail,
  ZohoDeskArticleSummary,
  ZohoDeskListResponse,
  ZohoDeskSection,
} from "./types";

type BlogListOptions = {
  category?: string;
  search?: string;
  limit?: number;
  offset?: number;
};

type RootCategoryRecord = {
  id?: string;
  name?: string;
  description?: string;
  permalink?: string;
  portalUrl?: string;
  locale?: string;
};

const FALLBACK_AUTHOR = "Payva Editorial Team";
const FALLBACK_IMAGE = "/seo-banner.jpeg";

function logZohoDeskError(context: string, error: unknown) {
  console.error(`[zoho-desk] ${context}`, error);
}

function uniqueById<T extends { id?: string; slug?: string }>(items: T[]) {
  const seen = new Set<string>();

  return items.filter((item) => {
    const key = item.id || item.slug;
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function normalizeArticleStatus(article: ZohoDeskArticleSummary) {
  return article.latestVersionStatus || article.status || "";
}

function isPublishedArticle(article: ZohoDeskArticleSummary) {
  return !article.isTrashed && normalizeArticleStatus(article) === "Published";
}

function mapArticleCategory(article: ZohoDeskArticleSummary): BlogCategory[] {
  const categoryName = article.category?.name?.trim();
  if (!categoryName) return [];

  return [
    {
      id: article.category?.id || article.categoryId,
      title: categoryName,
      slug: slugify(categoryName),
      portalUrl: article.category?.portalUrl || null,
    },
  ];
}

function getAuthorName(article: ZohoDeskArticleSummary) {
  return (
    article.author?.name ||
    article.owner?.name ||
    article.createdBy?.name ||
    FALLBACK_AUTHOR
  );
}

function getCanonicalBlogUrl(slug: string) {
  return `${SITE_URL}/blog/${slug}`;
}

function mapArticleSummaryToBlogPostCard(article: ZohoDeskArticleSummary): BlogPostCard {
  const slug = article.permalink?.trim() || slugify(article.title) || article.id;
  const excerpt = article.summary?.trim() || undefined;
  const coverImageUrl = findFirstImageUrl(article.summary) || null;
  const focusKeywords = parseKeywords(article.seoKeywords);

  return {
    _id: article.id,
    slug,
    title: article.title,
    excerpt,
    publishedAt: article.createdTime,
    updatedAt: article.modifiedTime,
    author: {
      id: article.author?.id || article.owner?.id || article.createdBy?.id,
      name: getAuthorName(article),
      image: article.author?.photoURL || article.owner?.photoURL || null,
    },
    categories: mapArticleCategory(article),
    coverImageUrl,
    seo: {
      metaTitle: article.seoTitle || undefined,
      metaDescription: article.seoDescription || excerpt,
      canonicalUrl: getCanonicalBlogUrl(slug),
      focusKeywords,
      noIndex: normalizeArticleStatus(article) !== "Published",
    },
  };
}

function mapArticleDetailToBlogPost(article: ZohoDeskArticleDetail): BlogPost {
  const summaryCard = mapArticleSummaryToBlogPostCard(article);
  const bodyHtml = sanitizeZohoHtml(article.answer || "");
  const excerpt =
    article.summary?.trim() ||
    article.seoDescription?.trim() ||
    getExcerptFromHtml(bodyHtml) ||
    summaryCard.excerpt;
  const coverImageUrl = findFirstImageUrl(bodyHtml) || summaryCard.coverImageUrl;

  return {
    ...summaryCard,
    excerpt,
    coverImageUrl,
    bodyHtml,
    tags: Array.isArray(article.tags) ? article.tags.filter(Boolean) : [],
    faqs: [],
    sourceUrl: article.portalUrl || article.webUrl || null,
    seo: {
      metaTitle: article.seoTitle || summaryCard.seo?.metaTitle,
      metaDescription:
        article.seoDescription || excerpt || summaryCard.seo?.metaDescription,
      canonicalUrl: getCanonicalBlogUrl(summaryCard.slug),
      focusKeywords: parseKeywords(article.seoKeywords),
      noIndex: normalizeArticleStatus(article) !== "Published",
    },
  };
}

async function listPublishedArticlesPage(from: number, limit: number) {
  const response = await zohoDeskFetch<ZohoDeskListResponse<ZohoDeskArticleSummary>>(
    "/api/v1/articles",
    {
      from,
      limit,
      sortBy: "-modifiedTime",
      status: "Published",
    },
  );

  return response?.data || [];
}

const getAllPublishedArticles = cache(async () => {
  if (!isZohoDeskConfigured) return [] as ZohoDeskArticleSummary[];

  try {
    const limit = 50;
    let from = 1;
    const articles: ZohoDeskArticleSummary[] = [];

    while (true) {
      const page = await listPublishedArticlesPage(from, limit);
      articles.push(...page.filter(isPublishedArticle));

      if (page.length < limit) break;
      from += page.length;

      if (from > 1000) break;
    }

    const seen = new Set<string>();
    return articles.filter((article) => {
      if (seen.has(article.id)) return false;
      seen.add(article.id);
      return true;
    });
  } catch (error) {
    logZohoDeskError("Failed to fetch Zoho Desk articles.", error);
    return [] as ZohoDeskArticleSummary[];
  }
});

const getArticleById = cache(async (articleId: string) => {
  if (!isZohoDeskConfigured) return null;

  try {
    return await zohoDeskFetch<ZohoDeskArticleDetail>(`/api/v1/articles/${articleId}`);
  } catch (error) {
    logZohoDeskError(`Failed to fetch Zoho Desk article ${articleId}.`, error);
    return null;
  }
});

async function enrichCardImage(article: ZohoDeskArticleSummary) {
  const card = mapArticleSummaryToBlogPostCard(article);
  if (card.coverImageUrl) return card;

  const detail = await getArticleById(article.id);
  if (!detail?.answer) return card;

  return {
    ...card,
    coverImageUrl: findFirstImageUrl(detail.answer) || card.coverImageUrl,
  };
}

function matchesSearch(article: ZohoDeskArticleSummary, search: string) {
  if (!search) return true;

  const haystack = [
    article.title,
    article.summary,
    article.category?.name,
    getAuthorName(article),
  ]
    .map((value) => stripHtml(value || ""))
    .join(" ")
    .toLowerCase();

  return haystack.includes(search.toLowerCase());
}

function matchesCategory(article: ZohoDeskArticleSummary, categorySlug: string) {
  if (!categorySlug) return true;
  return slugify(article.category?.name) === categorySlug;
}

function filterAndSortArticles(
  articles: ZohoDeskArticleSummary[],
  options: Pick<BlogListOptions, "category" | "search"> = {},
) {
  return articles
    .filter((article) => matchesCategory(article, slugify(options.category)))
    .filter((article) => matchesSearch(article, options.search?.trim() || ""))
    .sort((a, b) => {
      const aDate = new Date(a.modifiedTime || a.createdTime || 0).getTime();
      const bDate = new Date(b.modifiedTime || b.createdTime || 0).getTime();
      return bDate - aDate;
    });
}

function tryReadRootCategoryArray(payload: unknown): RootCategoryRecord[] {
  if (!payload || typeof payload !== "object") return [];
  const record = payload as Record<string, unknown>;

  const candidates = [
    record.data,
    record.rootCategories,
    record.kbRootCategories,
    record.categories,
  ];

  for (const candidate of candidates) {
    if (Array.isArray(candidate)) {
      return candidate as RootCategoryRecord[];
    }
  }

  return [];
}

async function listRootCategories() {
  if (!isZohoDeskConfigured) return [] as RootCategoryRecord[];

  try {
    const payload = await zohoDeskFetch<Record<string, unknown>>(
      "/api/v1/kbRootCategories",
      {
        include: "portalUrl,publishedArticleCount",
      },
    );

    return tryReadRootCategoryArray(payload);
  } catch {
    return [];
  }
}

async function getCategoryTree(rootCategoryId: string) {
  if (!isZohoDeskConfigured) return null;

  try {
    return await zohoDeskFetch<Record<string, unknown>>(
      `/api/v1/kbRootCategories/${rootCategoryId}/categoryTree`,
      {
        include: "portalUrl,publishedArticleCount",
        sortBy: "name",
      },
    );
  } catch {
    return null;
  }
}

function collectCategoryTreeEntries(payload: unknown) {
  const categories: BlogCategory[] = [];
  const sections: ZohoDeskSection[] = [];
  const seenCategoryIds = new Set<string>();
  const seenSectionIds = new Set<string>();

  function walk(value: unknown, parentKey = "", parentId: string | null = null) {
    if (Array.isArray(value)) {
      value.forEach((entry) => walk(entry, parentKey, parentId));
      return;
    }

    if (!value || typeof value !== "object") return;

    const node = value as Record<string, unknown>;
    const id = typeof node.id === "string" ? node.id : undefined;
    const name = typeof node.name === "string" ? node.name : undefined;
    const description = typeof node.description === "string" ? node.description : undefined;
    const portalUrl = typeof node.portalUrl === "string" ? node.portalUrl : undefined;
    const keyHint = parentKey.toLowerCase();

    if (id && name) {
      if (keyHint.includes("section")) {
        if (!seenSectionIds.has(id)) {
          seenSectionIds.add(id);
          sections.push({
            id,
            name,
            slug: slugify(name),
            description: description || null,
            parentId,
            portalUrl: portalUrl || null,
          });
        }
      } else if (
        keyHint.includes("categor") ||
        keyHint.includes("root") ||
        Object.prototype.hasOwnProperty.call(node, "sections") ||
        Object.prototype.hasOwnProperty.call(node, "subCategories")
      ) {
        if (!seenCategoryIds.has(id)) {
          seenCategoryIds.add(id);
          categories.push({
            id,
            title: name,
            slug: slugify(name),
            description: description || null,
            portalUrl: portalUrl || null,
          });
        }
        parentId = id;
      }
    }

    for (const [key, child] of Object.entries(node)) {
      if (["id", "name", "description", "portalUrl", "locale", "permalink"].includes(key)) {
        continue;
      }
      walk(child, key, parentId);
    }
  }

  walk(payload);

  return {
    categories: uniqueById(categories),
    sections: uniqueById(sections),
  };
}

const getKnowledgeBaseTree = cache(async () => {
  if (!isZohoDeskConfigured) {
    return { categories: [] as BlogCategory[], sections: [] as ZohoDeskSection[] };
  }

  const rootCategoryIds =
    zohoDeskRootCategoryIds.length > 0
      ? zohoDeskRootCategoryIds
      : (await listRootCategories()).map((category) => category.id).filter(Boolean) as string[];

  if (rootCategoryIds.length === 0) {
    return { categories: [] as BlogCategory[], sections: [] as ZohoDeskSection[] };
  }

  const trees = await Promise.all(rootCategoryIds.map((id) => getCategoryTree(id)));
  const categories: BlogCategory[] = [];
  const sections: ZohoDeskSection[] = [];

  for (const tree of trees) {
    if (!tree) continue;
    const extracted = collectCategoryTreeEntries(tree);
    categories.push(...extracted.categories);
    sections.push(...extracted.sections);
  }

  return {
    categories: uniqueById(categories),
    sections: uniqueById(sections),
  };
});

export async function getBlogPosts(options: BlogListOptions = {}) {
  if (!isZohoDeskConfigured) return [] as BlogPostCard[];

  const articles = await getAllPublishedArticles();
  const filteredArticles = filterAndSortArticles(articles, options);
  const offset = Math.max(0, options.offset || 0);
  const slicedArticles = filteredArticles.slice(offset);

  const limitedArticles =
    typeof options.limit === "number"
      ? slicedArticles.slice(0, options.limit)
      : slicedArticles;

  return Promise.all(limitedArticles.map(enrichCardImage));
}

export async function getBlogPostsCount(
  options: Pick<BlogListOptions, "category" | "search"> = {},
) {
  if (!isZohoDeskConfigured) return 0;

  const articles = await getAllPublishedArticles();
  return filterAndSortArticles(articles, options).length;
}

export async function getBlogPostBySlug(slug: string) {
  if (!isZohoDeskConfigured) return null;

  const articles = await getAllPublishedArticles();
  const matched = articles.find((article) => {
    const articleSlug = article.permalink?.trim() || slugify(article.title) || article.id;
    return articleSlug === slug;
  });

  if (!matched) return null;

  const detail = await getArticleById(matched.id);
  if (!detail) return null;

  return mapArticleDetailToBlogPost({ ...matched, ...detail });
}

export async function getBlogCategories() {
  if (!isZohoDeskConfigured) return [] as BlogCategory[];

  const [tree, articles] = await Promise.all([
    getKnowledgeBaseTree(),
    getAllPublishedArticles(),
  ]);

  if (tree.categories.length > 0) {
    return tree.categories.sort((a, b) => a.title.localeCompare(b.title));
  }

  const articleCategories = uniqueById(
    articles.flatMap((article) => mapArticleCategory(article)),
  );

  return articleCategories.sort((a, b) => a.title.localeCompare(b.title));
}

export async function getBlogSections() {
  if (!isZohoDeskConfigured) return [] as ZohoDeskSection[];
  const tree = await getKnowledgeBaseTree();
  return tree.sections.sort((a, b) => a.name.localeCompare(b.name));
}

export async function getBlogSlugs() {
  if (!isZohoDeskConfigured) return [] as BlogSlugEntry[];

  const articles = await getAllPublishedArticles();
  return articles.map((article) => ({
    slug: article.permalink?.trim() || slugify(article.title) || article.id,
    updatedAt: article.modifiedTime || article.createdTime,
  }));
}

export async function getRelatedBlogPosts(
  currentSlug: string,
  categorySlugs: string[] = [],
  limit = 3,
) {
  if (!isZohoDeskConfigured) return [] as BlogPostCard[];

  const articles = await getAllPublishedArticles();
  const relatedArticles = articles
    .filter((article) => {
      const articleSlug = article.permalink?.trim() || slugify(article.title) || article.id;
      if (articleSlug === currentSlug) return false;
      if (categorySlugs.length === 0) return true;
      return categorySlugs.includes(slugify(article.category?.name));
    })
    .slice(0, limit);

  return Promise.all(relatedArticles.map(enrichCardImage));
}

export async function getNextBlogPost(
  currentSlug: string,
  categorySlugs: string[] = [],
) {
  if (!isZohoDeskConfigured) return null;

  const articles = filterAndSortArticles(await getAllPublishedArticles());
  const currentIndex = articles.findIndex((article) => {
    const articleSlug = article.permalink?.trim() || slugify(article.title) || article.id;
    return articleSlug === currentSlug;
  });

  if (currentIndex === -1) return null;

  const nextInCategory = articles
    .slice(currentIndex + 1)
    .find((article) => categorySlugs.includes(slugify(article.category?.name)));

  const fallbackNext = articles
    .slice(currentIndex + 1)
    .find((article) => {
      const articleSlug = article.permalink?.trim() || slugify(article.title) || article.id;
      return articleSlug !== currentSlug;
    });

  const candidate =
    nextInCategory ||
    fallbackNext ||
    articles.find((article) => {
      const articleSlug = article.permalink?.trim() || slugify(article.title) || article.id;
      return articleSlug !== currentSlug;
    });

  return candidate ? enrichCardImage(candidate) : null;
}

export function getBlogFallbackImage(imageUrl?: string | null) {
  return imageUrl || FALLBACK_IMAGE;
}
