import type { TypedObject } from "@portabletext/types";

export interface SanityImage {
  _type?: "image";
  asset?: {
    _ref?: string;
    _type?: "reference";
  };
  alt?: string;
}

export interface BlogAuthor {
  name: string;
  slug?: string;
  image?: SanityImage;
  bio?: string;
}

export interface BlogCategory {
  title: string;
  slug: string;
  description?: string;
}

export interface BlogSeo {
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  focusKeywords?: string[];
  noIndex?: boolean;
  openGraphImage?: SanityImage;
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogPostCard {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImage?: SanityImage;
  publishedAt?: string;
  updatedAt?: string;
  author?: BlogAuthor;
  categories?: BlogCategory[];
  seo?: BlogSeo;
}

export interface BlogPost extends BlogPostCard {
  body: TypedObject[];
  faqs?: BlogFaq[];
}

export interface BlogSlugEntry {
  slug: string;
  updatedAt?: string;
}
