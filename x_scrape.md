# Skill: X Scrape

## Tool: `x_scrape`
**Purpose**: Search and extract posts, threads, and user profiles from X (Twitter).
**Parameters**:
- `query` (string): Search terms, hashtags, or handles (e.g., "$TOKEN", "@Base", "#BaseSummer").
- `max_results` (optional int): Number of posts to retrieve (default 5, max 20).
- `sort` (optional string): "latest" or "top" posts.

## When to Use
- **Sentiment Analysis**: Gauging the current "vibe" or community excitement around a Base chain launch.
- **Narrative Discovery**: Finding the origin of a specific trend or "shill" campaign.
- **Direct Alpha**: Checking a project founder's latest posts for unannounced updates or roadmap hints.
- **Influencer Monitoring**: Seeing what key ecosystem players are saying about a specific token.

## Best Practices
- **Ticker Focus**: Use the `$` prefix for tokens (e.g., `$BRETT`) to filter out general noise.
- **Context Synthesis**: Never rely on a single post; always aggregate at least 5-10 posts to form a sentiment conclusion.
- **Verification**: Cross-reference "Alpha" found on X with official project documentation via `web_fetch`.

## Patterns
- **The "Bull" Scan**: `x_scrape(query="$TOKEN bullish", sort="top")`
- **The "Dev" Check**: `x_scrape(query="from:ProjectHandle roadmap", max_results=5)`
