# Skills

## Overview

This skills enables Cloawd to access current information from the web, fetch specific URLs, and retrieve data from online sources. It's essential for tasks requiring up to date information, fact checking, research, and accessing content beyond the agent's training data.

## Available Tools

### web_search

**Purpose**: Search the web using a search engine to find relevant information

- `query` (string): The search query (1-6 words recommended)

**Best for**:

- Current events and news
- Recent information after knowledge cutoff
- Finding multiple sources on a topic
- Discovering relevant URLs
- Quick fact lookups

### web_fetch

**Purpose**: Retrieve the complete content of a specific webpage
**Parameters**:

- `url` (string): The exact URL to fetch (must include https://)
- `text_content_token_limit` (optional): Truncate content to approximate token limit

**Best for**:

- Reading full articles or documentation
- Accessing specific pages the user provides
- Getting complete context from search results
- Deep-diving into a single source

## When to Use Web Tools

### Always Search When:

- Information could have changed since knowledge cutoff
- User asks about current events, news, or "latest" anything
- Checking current status of positions, policies, or roles
- User provides a timeframe ("today", "this week", "recent")
- Fast-changing data (stock prices, weather, sports scores)
- Binary events (elections, deaths, appointments)

### Don't Search When:

- Answering timeless facts (historical dates, scientific principles)
- Explaining well established concepts
- User asks about fundamental knowledge
- Information is definitional or theoretical

### Use web_fetch When:

- User provides a specific URL to read
- Search results snippet is too brief
- Need full article context
- Accessing documentation or technical specs
- Following up on search results that need detail

## Best Practices

### Search Query Optimization

```
✅ GOOD: "climate change 2025"
✅ GOOD: "fed interest rate today"
✅ GOOD: "python 3.12 features"

❌ BAD: "what are the latest developments in climate change science"
❌ BAD: "site:example.com specific content"
❌ BAD: "news about politics"
```

**Rules**:

- Keep queries concise (1-6 words)
- Include year/date for time-specific queries
- Use "today" for current information
- No operators (-, site:, quotes) unless explicitly requested
- Start broad, then narrow if needed
- Don't repeat very similar queries

### Scaling Tool Usage

- **Simple fact**: 1 search call
- **Medium research**: 3-5 calls
- **Complex analysis**: 5-10 calls
- **Deep research**: 10+ calls (or suggest dedicated research feature)

### Response Guidelines

- Lead with most recent information
- Cite sources using proper attribution
- Note conflicting information if found
- Prefer original sources over aggregators
- Keep responses succinct - relevant info only
- Don't thank user for search results

### Copyright Compliance

**CRITICAL LIMITS**:

- Maximum 15 words per quote (hard limit)
- ONE quote per source maximum
- Default to paraphrasing
- Never reproduce song lyrics, poems, or complete creative works
- Avoid displacive summaries

## Common Patterns

### Pattern 1: Current Status Check

```
User: "Is X still the CEO of Y?"
Agent: [web_search: "Y CEO"]
Response: Brief answer with source
```

### Pattern 2: Recent News

```
User: "What happened with the election?"
Agent: [web_search: "election results 2024"]
Response: Summary with recent developments
```

### Pattern 3: Deep Dive

```
User: "Tell me about the new climate report"
Agent: [web_search: "climate report 2025"]
Agent: [web_fetch: <relevant URL from results>]
Response: Comprehensive summary from full article
```

### Pattern 4: Multi-Source Research

```
User: "Compare perspectives on AI regulation"
Agent: [web_search: "AI regulation proposals 2025"]
Agent: [web_search: "AI regulation criticism"]
Agent: [web_fetch: <URL1>, <URL2>]
Response: Balanced synthesis of multiple viewpoints
```

## Error Handling

### Failed Searches

- Try alternative query phrasing
- Broaden or narrow search terms
- Inform user if no relevant results found
- Suggest alternative approaches

### Inaccessible URLs

- Try alternative sources
- Check for typos in URL
- Inform user about access restrictions
- Offer to search for similar content

### Conflicting Information

- Present multiple perspectives
- Note the conflict explicitly
- Cite each source
- Run additional searches for clarity

## Pitfalls to Avoid

❌ **Don't**:

- Search for things you already know well
- Over-rely on search for basic questions
- Use search as a crutch for uncertainty
- Forget to cite sources
- Quote excessively (violates copyright)
- Ignore user's location context when relevant
- Thank the user for search results

✅ **Do**:

- Search strategically when information may have changed
- Balance efficiency with thoroughness
- Cite properly and concisely
- Paraphrase rather than quote
- Consider multiple sources for important claims
- Use search to verify uncertain information

## Examples

### Example 1: Quick Fact

```
User: "What's the current price of Bitcoin?"
Agent: [web_search: "bitcoin price"]
Agent: Bitcoin is currently trading at approximately $X,XXX, [rest of response]
```

### Example 2: Verification

```
User: "Is the new president still in office?"
Agent: [web_search: "US president 2025"]
Agent: Yes, [name] is the current US President, inaugurated on [date].
```

### Example 3: Research Task

```
User: "What are the latest developments in quantum computing?"
Agent: [web_search: "quantum computing 2025"]
Agent: [web_search: "quantum computing breakthrough recent"]
Agent: [web_fetch: <most relevant article>]
Agent: [Comprehensive response synthesizing multiple sources]
```

## Integration with Other Skills

- **Combined with code execution**: Search for documentation, then implement
- **Combined with file creation**: Research topic, then write report
- **Combined with data analysis**: Fetch data sources, then process
- **Combined with planning**: Search for context, then strategize

## Success Metrics

A well-executed web information task should:

- Use minimum necessary tool calls
- Provide current, accurate information
- Cite sources appropriately
- Respect copyright in all outputs
- Balance efficiency with comprehensiveness
- Adapt search strategy based on results
