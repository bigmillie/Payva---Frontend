import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import BlogCard from "@/app/components/blog/BlogCard";
import JsonLd from "@/app/components/blog/JsonLd";
import PortableTextRenderer from "@/app/components/blog/PortableTextRenderer";
import SingleBlogHero from "@/app/components/blog/SingleBlogHero";
import {
  getBlogPostBySlug,
  getBlogSlugs,
  getRelatedBlogPosts,
} from "@/sanity/lib/api";
import {
  estimateReadingTime,
  formatDate,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  toAbsoluteUrl,
} from "@/sanity/lib/seo";
import { urlForImage } from "@/sanity/lib/image";

export const revalidate = 300;

type PageParams = {
  slug: string;
};

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Payva Blog",
      description: SITE_DESCRIPTION,
      robots: { index: false, follow: false },
    };
  }

  const title = post.seo?.metaTitle || `${post.title} | Payvapayment Blog`;
  const description =
    post.seo?.metaDescription ||
    post.excerpt ||
    "Detailed guide from Payvapayment Blog on cross-border payments and remittance strategy.";
  const imageUrl =
    urlForImage(post.seo?.openGraphImage || post.coverImage)
      ?.width(1200)
      .height(630)
      .fit("crop")
      .auto("format")
      .url() || `${SITE_URL}/seo-banner.jpeg`;

  const canonical =
    post.seo?.canonicalUrl || toAbsoluteUrl(`/blog/${post.slug || slug}`);

  return {
    title,
    description,
    keywords: post.seo?.focusKeywords,
    alternates: { canonical },
    robots: {
      index: !post.seo?.noIndex,
      follow: true,
      googleBot: {
        index: !post.seo?.noIndex,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const categorySlugs = (post.categories || []).map(
    (category) => category.slug,
  );
  const relatedPosts = await getRelatedBlogPosts(post.slug, categorySlugs, 3);

  const coverImage =
    urlForImage(post.coverImage)
      ?.width(1600)
      .height(900)
      .fit("crop")
      .auto("format")
      .url() || `${SITE_URL}/seo-banner.jpeg`;

  const readingTime = estimateReadingTime(post.body || []);
  const postUrl = `${SITE_URL}/blog/${post.slug}`;

  const schemas: Array<Record<string, unknown>> = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description:
        post.seo?.metaDescription || post.excerpt || SITE_DESCRIPTION,
      image: [
        urlForImage(post.seo?.openGraphImage || post.coverImage)
          ?.width(1200)
          .height(630)
          .fit("crop")
          .auto("format")
          .url() || `${SITE_URL}/seo-banner.jpeg`,
      ],
      datePublished: post.publishedAt,
      dateModified: post.updatedAt || post.publishedAt,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": postUrl,
      },
      author: {
        "@type": "Person",
        name: post.author?.name || "Payva Editorial Team",
      },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/opengraph-image.webp`,
        },
      },
      articleSection: (post.categories || []).map((item) => item.title),
      keywords: post.seo?.focusKeywords,
      timeRequired: `PT${readingTime}M`,
    },
    {
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
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: postUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: post.title,
      url: postUrl,
      description:
        post.seo?.metaDescription || post.excerpt || SITE_DESCRIPTION,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
  ];

  if (post.faqs && post.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return (
    <main className="bg-slate-50 pb-20">
      <JsonLd data={schemas} />
      <SingleBlogHero title={post.title} excerpt={post.excerpt} />

      <article className="mx-auto w-full max-w-5xl px-6 md:px-12">
        <nav className="mb-6 text-sm text-slate-500">
          <Link href="/" className="hover:text-[#006D68]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#006D68]">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">{post.title}</span>
        </nav>

        <header className="space-y-5 rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-[#006D68]">
            {(post.categories || []).map((category) => (
              <Link
                key={category.slug}
                href={`/blog?category=${category.slug}`}
                className="rounded-full bg-[#E6F9F7] px-3 py-1"
              >
                {category.title}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span className="font-medium text-slate-700">
              {post.author?.name || "Payva Editorial Team"}
            </span>
            <span>•</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span>•</span>
            <span>{readingTime} min read</span>
          </div>
        </header>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white">
          <Image
            src={coverImage}
            alt={post.title}
            width={1600}
            height={900}
            className="h-auto w-full"
            priority
          />
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
          <PortableTextRenderer value={post.body || []} />

          {post.faqs && post.faqs.length > 0 ? (
            <section className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-bold text-slate-900">FAQs</h2>
              <div className="mt-5 space-y-4">
                {post.faqs.map((faq, index) => (
                  <div
                    key={`${faq.question}-${index}`}
                    className="rounded-xl bg-white p-4"
                  >
                    <h3 className="font-semibold text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </article>

      {relatedPosts.length > 0 ? (
        <section className="mx-auto mt-14 w-full max-w-7xl px-6 md:px-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 md:text-3xl">
            Related Articles
          </h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <BlogCard key={relatedPost._id} post={relatedPost} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
