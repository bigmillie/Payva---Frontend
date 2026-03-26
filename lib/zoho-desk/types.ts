export interface ZohoDeskAgent {
  id?: string;
  name?: string;
  status?: string;
  photoURL?: string | null;
  zuid?: string;
}

export interface ZohoDeskCategoryRef {
  id?: string;
  name?: string;
  locale?: string;
  portalUrl?: string;
}

export interface ZohoDeskArticleSummary {
  id: string;
  title: string;
  summary?: string | null;
  permalink?: string | null;
  status?: string;
  latestVersionStatus?: string;
  createdTime?: string;
  modifiedTime?: string;
  portalUrl?: string;
  webUrl?: string;
  categoryId?: string;
  category?: ZohoDeskCategoryRef | null;
  author?: ZohoDeskAgent | null;
  owner?: ZohoDeskAgent | null;
  createdBy?: ZohoDeskAgent | null;
  modifiedBy?: ZohoDeskAgent | null;
  authorId?: string;
  ownerId?: string;
  locale?: string;
  isTrashed?: boolean;
  seoTitle?: string | null;
  seoDescription?: string | null;
  seoKeywords?: string | string[] | null;
  tags?: string[] | null;
}

export interface ZohoDeskArticleDetail extends ZohoDeskArticleSummary {
  answer?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  seoKeywords?: string | string[] | null;
  isSEOEnabled?: boolean;
  permission?: string;
  expiryDate?: string | null;
}

export interface ZohoDeskListResponse<T> {
  data?: T[];
  count?: number | string;
}

export interface BlogAuthor {
  id?: string;
  name: string;
  image?: string | null;
}

export interface BlogCategory {
  id?: string;
  title: string;
  slug: string;
  description?: string | null;
  portalUrl?: string | null;
}

export interface BlogSeo {
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  focusKeywords?: string[];
  noIndex?: boolean;
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogPostCard {
  _id: string;
  slug: string;
  title: string;
  excerpt?: string;
  publishedAt?: string;
  updatedAt?: string;
  author?: BlogAuthor;
  categories?: BlogCategory[];
  coverImageUrl?: string | null;
  seo?: BlogSeo;
}

export interface BlogPost extends BlogPostCard {
  bodyHtml: string;
  tags?: string[];
  faqs?: BlogFaq[];
  sourceUrl?: string | null;
}

export interface BlogSlugEntry {
  slug: string;
  updatedAt?: string;
}

export interface ZohoDeskSection {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  parentId?: string | null;
  portalUrl?: string | null;
}
