# Skill: Web Search

## Tool: `web_search`
**Purpose**: Search the web using a search engine to find relevant information.
**Parameters**: 
- `query` (string): The search query (1-6 words recommended).

## When to Use
- **Current Events**: Information likely to have changed recently (news, status of positions).
- **Time-Specific Data**: Queries mentioning "today," "this week," or a specific year (e.g., 2026).
- **Fast-Changing Data**: Stock prices, weather, or binary events like elections and appointments.
- **Discovery**: Finding relevant URLs and multiple sources on a complex topic.

## Best Practices
- **Concise Queries**: Use 1-6 keywords (e.g., ✅ "bitcoin price today", ❌ "what is the current price of bitcoin").
- **No Operators**: Avoid `-`, `site:`, or quotes unless explicitly requested.
- **Scaling**: 
  - Simple facts: 1 call
  - Medium research: 3-5 calls
  - Deep research: 10+ calls

## Response Guidelines
- Lead with the most recent information found.
- Cite sources using proper attribution.
- Maintain a maximum of 15 words per quote (hard limit) and one quote per source.
- Prefer original sources over aggregators.
