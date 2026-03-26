# Zoho Desk Blog Setup

This project now reads the public blog from Zoho Desk Articles instead of Sanity.

## Required environment variables

- `ZOHO_DESK_BASE_URL`
- `ZOHO_ACCOUNTS_BASE_URL`
- `ZOHO_DESK_ORG_ID`
- `ZOHO_DESK_ACCESS_TOKEN` or the refresh-token trio below
- `ZOHO_DESK_CLIENT_ID`
- `ZOHO_DESK_CLIENT_SECRET`
- `ZOHO_DESK_REFRESH_TOKEN`
- `ZOHO_DESK_ROOT_CATEGORY_IDS` (optional, comma-separated)

## Recommended production auth

Use refresh-token auth so the app can mint fresh access tokens automatically:

- `ZOHO_DESK_CLIENT_ID`
- `ZOHO_DESK_CLIENT_SECRET`
- `ZOHO_DESK_REFRESH_TOKEN`
- `ZOHO_DESK_ORG_ID`

The access token can still be supplied directly with `ZOHO_DESK_ACCESS_TOKEN`, but it expires and is better suited to short-lived tests.

## Zoho Desk API scope

The OAuth app must include at minimum:

- `Desk.articles.READ`

## Endpoints used by the app

- `GET /api/v1/articles`
- `GET /api/v1/articles/{article_id}`
- `GET /api/v1/kbRootCategories`
- `GET /api/v1/kbRootCategories/{rootCategoryId}/categoryTree`

## Mapping notes

- Zoho article `permalink` becomes the site slug at `/blog/[slug]`
- Zoho article `summary` becomes the excerpt
- Zoho article `answer` HTML becomes the article body
- Zoho article/category metadata feeds sitemap entries and structured data
- If Zoho content has no obvious lead image, the site falls back to `/seo-banner.jpeg`
