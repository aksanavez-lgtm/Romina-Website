export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.psychotherapie-lauzensky.at",
);

export const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();
