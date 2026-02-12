import "dotenv/config";

if (!process.env.FIREBASE_API_KEY) {
  throw new Error("FIREBASE_API_KEY is not defined");
}

export const secrets = {
  firecrawlApiKey: process.env.FIRECRAWL_API_KEY,
};
