# Skill: Web Scrape

## Tool: `web_scrape`
**Purpose**: Perform advanced scraping of dynamic or complex websites to extract structured information.
**Parameters**:
- `url` (string): The target website URL.
- `selector` (optional string): Specific CSS or XPath selector to target.
- `wait_for` (optional string): Element to wait for before scraping (to ensure JS loads).

## When to Use
- **Dynamic Content**: Websites that use heavy JavaScript (React/Next.js) where `web_fetch` might return an empty shell.
- **Specific Data Extraction**: When you only need a specific table, price feed, or section of a page (e.g., "Extract only the 'Tokenomics' table").
- **Interactive Sites**: Pages that require a brief wait for elements to populate, like DEX charts or liquidity pool trackers.

## Best Practices
- **Targeting**: Use specific selectors when possible to reduce noise and context usage.
- **Patience**: Use `wait_for` on slow-loading crypto project sites to avoid "missing content" errors.
- **Rate Limiting**: Be respectful of host servers; do not scrape the same URL multiple times in a single session.

## Response Guidelines
- Clean the HTML/Markdown to ensure only the requested data is returned.
- If a scrape fails due to bot protection, report the error and suggest using `web_search` to find a cached or alternative source.
