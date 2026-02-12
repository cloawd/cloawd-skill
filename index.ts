import { Web } from "./src/web";
import { Cli } from "clerc";

const web = new Web();

Cli()
  .name("cloawd")
  .scriptName("cloawd-web")
  .description("A CLI tool for crawling and scraping websites")
  .version("1.0.0")
  .command("crawl", "Crawl a URL", {
    parameters: ["<url>"],
  })
  .command("scrape", "Scrape a URL", {
    parameters: ["<url>"],
  })
  .command("search", "Search for a query", {
    parameters: ["<query>"],
  })
  .on("crawl", async (ctx) => {
    try {
      const res = await web.crawl(ctx.parameters.url);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  })
  .on("scrape", async (ctx) => {
    try {
      const res = await web.scrape(ctx.parameters.url);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  })
  .on("search", async (ctx) => {
    try {
      const res = await web.search(ctx.parameters.query);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  })
  .parse();
