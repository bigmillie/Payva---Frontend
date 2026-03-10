import Link from "next/link";
import Image from "next/image";
import type { BlogPostCard } from "@/sanity/lib/types";
import { formatDate } from "@/sanity/lib/seo";
import { urlForImage } from "@/sanity/lib/image";

interface BlogCardProps {
  post: BlogPostCard;
}

const fallbackImage = "/seo-banner.jpeg";

const BlogCard = ({ post }: BlogCardProps) => {
  const imageUrl =
    urlForImage(post.seo?.openGraphImage || post.coverImage)
      ?.width(1200)
      .height(675)
      .fit("crop")
      .auto("format")
      .url() || fallbackImage;

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <Link href={`/blog/${post.slug}`} className="block">
        <Image
          src={imageUrl}
          alt={post.title}
          width={1200}
          height={675}
          className="h-56 w-full object-cover"
        />
      </Link>

      <div className="space-y-3 p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
          {post.publishedAt ? <span>{formatDate(post.publishedAt)}</span> : null}
          {post.categories?.[0]?.title ? (
            <>
              <span>•</span>
              <span>{post.categories[0].title}</span>
            </>
          ) : null}
        </div>

        <h2 className="text-xl font-bold leading-tight text-slate-900">
          <Link href={`/blog/${post.slug}`} className="hover:text-[#006D68]">
            {post.title}
          </Link>
        </h2>

        {post.excerpt ? (
          <p className="line-clamp-3 text-sm leading-6 text-slate-600">
            {post.excerpt}
          </p>
        ) : null}

        <div className="flex items-center justify-between pt-2 text-sm text-slate-600">
          <span>{post.author?.name || "Payva Editorial Team"}</span>
          <Link
            href={`/blog/${post.slug}`}
            className="font-semibold text-[#006D68] hover:underline"
          >
            Read article
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
