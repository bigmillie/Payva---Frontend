import type { Metadata } from "next";
import Link from "next/link";
import BlogCard from "@/app/components/blog/BlogCard";
import JsonLd from "@/app/components/blog/JsonLd";
import BlogHero from "@/app/components/company/BlogHero";
import {
  getBlogCategories,
  getBlogFallbackImage,
  getBlogPosts,
  getBlogPostsCount,
} from "@/lib/zoho-desk/api";
import { isZohoDeskConfigured } from "@/lib/zoho-desk/client";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/zoho-desk/seo";

export const revalidate = 300;
const POSTS_PER_PAGE = 7;

export const metadata: Metadata = {
  title: "Payva Blog | Remittance, Payments, and Fintech Insights",
  description:
    "Explore deep guides and expert insights on cross-border payments, remittances, fintech trends, security, and financial growth from Payva.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    title: "Payva Blog | Global Payments Knowledge Hub",
    description:
      "Actionable remittance and fintech insights for individuals and businesses moving money across borders.",
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/seo-banner.jpeg`,
        width: 1200,
        height: 630,
        alt: "Payva blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payva Blog | Global Payments Knowledge Hub",
    description:
      "Actionable remittance and fintech insights for individuals and businesses moving money across borders.",
    images: [`${SITE_URL}/seo-banner.jpeg`],
  },
};

function createBlogListSchemas(
  posts: Array<{
    title: string;
    slug: string;
    publishedAt?: string;
    updatedAt?: string;
    excerpt?: string;
    seo?: { metaDescription?: string };
  }>,
) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/opengraph-image.webp`,
    sameAs: [
      "https://www.facebook.com/Payvaofficial?ref=1",
      "https://www.instagram.com/payvapayment/",
      "https://x.com/Payvapayment",
      "https://www.linkedin.com/company/payvapayment",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
    ],
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Payva Blog Articles",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/blog/${post.slug}`,
      name: post.title,
      description:
        post.seo?.metaDescription || post.excerpt || SITE_DESCRIPTION,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt || post.publishedAt,
    })),
  };

  const collectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Payva Blog",
    description:
      "Detailed educational articles about cross-border payments, remittance, and financial operations.",
    url: `${SITE_URL}/blog`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return [organization, website, breadcrumb, collectionPage, itemList];
}

function asSingle(value?: string | string[]) {
  if (!value) return "";
  return Array.isArray(value) ? value[0] || "" : value;
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string | string[];
    q?: string | string[];
    page?: string | string[];
  }>;
}) {
  const params = await searchParams;
  const selectedCategory = asSingle(params.category).trim();
  const query = asSingle(params.q).trim();
  const requestedPage = Number.parseInt(asSingle(params.page), 10);
  const page =
    Number.isFinite(requestedPage) && requestedPage > 0 ? requestedPage : 1;
  const visiblePostLimit = page * POSTS_PER_PAGE;

  const [posts, totalPosts, categories] = await Promise.all([
    getBlogPosts({
      category: selectedCategory,
      search: query,
      limit: visiblePostLimit,
    }),
    getBlogPostsCount({ category: selectedCategory, search: query }),
    getBlogCategories(),
  ]);

  const featuredPost = posts[0] || null;
  const remainingPosts = posts.slice(1);

  const queryForCategory = (slug: string) => {
    const search = new URLSearchParams();
    if (query) search.set("q", query);
    if (slug) search.set("category", slug);

    const qs = search.toString();
    return qs ? `/blog?${qs}` : "/blog";
  };

  const loadMoreUrl = (() => {
    const search = new URLSearchParams();
    if (query) search.set("q", query);
    if (selectedCategory) search.set("category", selectedCategory);
    search.set("page", String(page + 1));
    return `/blog?${search.toString()}`;
  })();

  const schemas = createBlogListSchemas(posts);
  const featuredImage = getBlogFallbackImage(featuredPost?.coverImageUrl);

  return (
    <main className="pb-20">
      <BlogHero />
      <JsonLd data={schemas} />

      <section className="mx-auto w-full max-w-7xl space-y-8 px-4 md:px-8">
        {!isZohoDeskConfigured ? (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-900">
            Blog is wired for Zoho Desk, but credentials are missing. Configure
            `ZOHO_DESK_ORG_ID` and either `ZOHO_DESK_ACCESS_TOKEN` or the
            refresh-token credentials in your environment to start publishing.
          </div>
        ) : null}

        <form
          action="/blog"
          method="GET"
          className="grid gap-3 bg-white md:grid-cols-[1fr_auto]"
        >
          <input
            type="search"
            name="q"
            defaultValue={query}
            placeholder="Search topics (e.g. CAD to NGN transfer fees, remittance security, KYC)..."
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none ring-[#006D68] transition focus:ring-2"
          />
          {selectedCategory ? (
            <input type="hidden" name="category" value={selectedCategory} />
          ) : null}
          <button
            type="submit"
            className="rounded-xl bg-[#006D68] px-6 py-3 text-sm font-semibold text-white hover:bg-[#005853]"
          >
            Search Blog
          </button>
        </form>

        <div className="flex flex-wrap gap-2">
          <Link
            href={queryForCategory("")}
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              !selectedCategory
                ? "bg-[#006D68] text-white"
                : "bg-white text-slate-700 ring-1 ring-slate-300"
            }`}
          >
            All Topics
          </Link>
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={queryForCategory(category.slug)}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                selectedCategory === category.slug
                  ? "bg-[#006D68] text-white"
                  : "bg-white text-slate-700 ring-1 ring-slate-300"
              }`}
            >
              {category.title}
            </Link>
          ))}
        </div>

        {featuredPost ? (
          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid gap-0 lg:grid-cols-2">
              <div
                className="min-h-72 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${featuredImage})`,
                }}
              />
              <div className="space-y-4 p-8">
                <span className="inline-block rounded-full bg-[#E6F9F7] px-3 py-1 text-xs font-semibold uppercase text-[#006D68]">
                  Featured Article
                </span>
                <h2 className="text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="hover:text-[#006D68]"
                  >
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="text-base leading-7 text-slate-600">
                  {featuredPost.excerpt ||
                    "Read this in-depth article to understand strategy, risks, and practical playbooks for international payments."}
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <span>
                    {featuredPost.author?.name || "Payva Editorial Team"}
                  </span>
                  <span>•</span>
                  <span>
                    {featuredPost.publishedAt
                      ? new Date(featuredPost.publishedAt).toLocaleDateString()
                      : "Latest"}
                  </span>
                </div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex rounded-xl bg-[#006D68] px-5 py-3 text-sm font-semibold text-white hover:bg-[#005853]"
                >
                  Read full article
                </Link>
              </div>
            </div>
          </article>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-600">
            No blog posts found yet for this filter.
          </div>
        )}

        {remainingPosts.length > 0 ? (
          <>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {remainingPosts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>

            {posts.length < totalPosts ? (
              <div className="flex justify-center pt-2">
                <Link
                  href={loadMoreUrl}
                  className="inline-flex rounded-xl bg-[#006D68] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#005853]"
                >
                  Load more articles
                </Link>
              </div>
            ) : null}
          </>
        ) : null}
      </section>
    </main>
  );
}
