import Firecrawl from "@mendable/firecrawl-js";
import { secrets } from "../utils";

export class Web {
  private fc: Firecrawl;

  constructor() {
    this.fc = new Firecrawl({
      apiKey: secrets.firecrawlApiKey,
    });
  }

  public async crawl(url: string) {
    const res = await this.fc.crawl(url);
    return res;
  }

  public async scrape(url: string) {
    const res = await this.fc.scrape(url);
    return res;
  }

  public async search(query: string) {
    const res = await this.fc.search(query);
    return res;
  }
}
