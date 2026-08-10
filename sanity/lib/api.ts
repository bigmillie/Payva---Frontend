import { isSanityConfigured, sanityFetch } from "./client";
import {
  blogCategoriesQuery,
  blogPostBySlugQuery,
  blogPostsQuery,
  blogSlugsQuery,
  relatedBlogPostsQuery,
} from "./queries";
import type {
  BlogCategory,
  BlogPost,
  BlogPostCard,
  BlogSlugEntry,
} from "./types";

interface BlogListOptions {
  category?: string;
  search?: string;
  limit?: number;
}

export async function getBlogPosts(options: BlogListOptions = {}) {
  if (!isSanityConfigured) return [];

  const { category = "", search = "", limit = 20 } = options;
  const searchPattern = search ? `*${search}*` : "";

  const posts = await sanityFetch<BlogPostCard[]>(blogPostsQuery, {
    category,
    searchPattern,
    limit,
  });

  return posts ?? [];
}

export async function getBlogPostBySlug(slug: string) {
  if (!isSanityConfigured) return null;

  const post = await sanityFetch<BlogPost | null>(blogPostBySlugQuery, { slug });
  return post ?? null;
}

export async function getBlogCategories() {
  if (!isSanityConfigured) return [];

  const categories = await sanityFetch<BlogCategory[]>(blogCategoriesQuery);
  return categories ?? [];
}

export async function getBlogSlugs() {
  if (!isSanityConfigured) return [];

  const slugs = await sanityFetch<BlogSlugEntry[]>(blogSlugsQuery);
  return slugs ?? [];
}

export async function getRelatedBlogPosts(
  slug: string,
  categorySlugs: string[] = [],
  limit = 3,
) {
  if (!isSanityConfigured) return [];

  const posts = await sanityFetch<BlogPostCard[]>(relatedBlogPostsQuery, {
    slug,
    categorySlugs,
    limit,
  });

  return posts ?? [];
}
