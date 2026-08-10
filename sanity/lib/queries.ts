import groq from "groq";

export const blogCategoriesQuery = groq`
  *[_type == "category" && defined(slug.current)] | order(title asc) {
    title,
    "slug": slug.current,
    description
  }
`;

const blogPostProjection = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  publishedAt,
  "updatedAt": coalesce(updatedAt, _updatedAt, publishedAt, _createdAt),
  "author": author->{
    name,
    "slug": slug.current,
    image,
    bio
  },
  "categories": categories[]->{
    title,
    "slug": slug.current,
    description
  },
  seo
`;

export const blogPostsQuery = groq`
  *[_type == "post" && defined(slug.current) && coalesce(publishedAt, _createdAt) <= now() && coalesce(seo.noIndex, false) != true
    && (!defined($category) || $category == "" || count((categories[]->slug.current)[@ == $category]) > 0)
    && (!defined($searchPattern) || $searchPattern == "" || title match $searchPattern || excerpt match $searchPattern)
  ] | order(coalesce(publishedAt, _createdAt) desc)[0...$limit] {
    ${blogPostProjection}
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug && coalesce(publishedAt, _createdAt) <= now()][0] {
    ${blogPostProjection},
    body,
    faqs[]{
      question,
      answer
    }
  }
`;

export const blogSlugsQuery = groq`
  *[_type == "post" && defined(slug.current) && coalesce(publishedAt, _createdAt) <= now() && coalesce(seo.noIndex, false) != true] {
    "slug": slug.current,
    "updatedAt": coalesce(updatedAt, _updatedAt, publishedAt, _createdAt)
  }
`;

export const relatedBlogPostsQuery = groq`
  *[_type == "post" && defined(slug.current) && slug.current != $slug && coalesce(publishedAt, _createdAt) <= now() && coalesce(seo.noIndex, false) != true
    && (count((categories[]->slug.current)[@ in $categorySlugs]) > 0 || count($categorySlugs) == 0)
  ] | order(coalesce(publishedAt, _createdAt) desc)[0...$limit] {
    ${blogPostProjection}
  }
`;
