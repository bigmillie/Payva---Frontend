import { createClient, type ClientConfig } from "@sanity/client";

export const sanityProjectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "";
export const sanityApiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

export const isSanityConfigured = Boolean(sanityProjectId && sanityDataset);

const readToken = process.env.SANITY_READ_TOKEN;

const clientConfig: ClientConfig = {
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: !readToken,
  token: readToken,
  perspective: "published",
};

export const sanityClient = isSanityConfigured
  ? createClient(clientConfig)
  : null;

export async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}) {
  if (!sanityClient) return null;
  return sanityClient.fetch<T>(query, params);
}
