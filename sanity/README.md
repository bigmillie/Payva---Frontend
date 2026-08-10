# Sanity Blog + Embedded Studio

## Studio URL

- `/studio`

## Environment Variables

Required:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`

Optional:
- `SANITY_READ_TOKEN` (only if your dataset is private)

## Schemas

See:
- `/Users/mac/personal/payva/sanity/schemaTypes/post.ts`
- `/Users/mac/personal/payva/sanity/schemaTypes/author.ts`
- `/Users/mac/personal/payva/sanity/schemaTypes/category.ts`

## Notes

- Studio is embedded in Next at `/studio` via `next-sanity`.
- Studio pages are `noindex`.
- Blog routes (`/blog`, `/blog/[slug]`) read from the same dataset.
