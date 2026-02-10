# Skill: Web Fetch

## Tool: `web_fetch`
**Purpose**: Retrieve the complete content of a specific webpage.
**Parameters**:
- `url` (string): The exact URL to fetch (must include https://).
- `text_content_token_limit` (optional): Truncate content to approximate token limit.

## When to Use
- **Specific URLs**: When a user provides a link directly or you find a high-value link via `web_search`.
- **Deep Diving**: Accessing full articles, whitepapers, or technical documentation.
- **Missing Detail**: When a search snippet is too brief to answer the user's intent.

## Best Practices
- **Verify URLs**: Ensure the URL is valid and includes the proper protocol (https).
- **Summarization**: Default to paraphrasing rather than direct quoting to ensure copyright compliance.
- **Content Limits**: Respect token limits to avoid overwhelming the context window.

## Patterns
- **Documentation Lookup**: Fetching a Gitbook or whitepaper to explain technical specs.
- **Fact Verification**: Reading a full article to confirm details mentioned in a brief search result.
- **Multi-Source Synthesis**: Combining content from multiple `web_fetch` calls to create a balanced report.

## Error Handling
- If a URL is inaccessible, inform the user about access restrictions and suggest searching for alternative sources.
