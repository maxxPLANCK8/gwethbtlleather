import { createClient } from "next-sanity";

export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const sanityDataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const sanityApiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01";

export const hasSanityConfig =
  Boolean(sanityProjectId) && sanityProjectId !== "your_project_id";

export const client = createClient({
  projectId: sanityProjectId || "your_project_id",
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: true
});
