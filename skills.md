# Skills

## Overview

These skills enable Cloawd to access current information from the web, navigate social sentiment, and retrieve deep-dive data from online sources. It is the engine that allows Cloawd to perform real-time research beyond its training data, specifically optimized for the fast-moving crypto ecosystem.

## 🛠️ Available Toolset

Cloawd’s capabilities are divided into four specialized modules. For detailed parameters and best practices, refer to each tool's individual documentation file:

| Tool | Focus | Documentation |
| :--- | :--- | :--- |
| **`web_search`** | Broad discovery and finding relevant URLs. | [`web_search.md`](./web_search.md) |
| **`web_fetch`** | Deep reading of static pages and whitepapers. | [`web_fetch.md`](./web_fetch.md) |
| **`web_scrape`** | Extracting data from dynamic or complex dApps. | [`web_scrape.md`](./web_scrape.md) |
| **`x_scrape`** | Social intelligence and real-time narrative tracking. | [`x_scrape.md`](./x_scrape.md) |

---

## 🧭 Selection Logic: Which Tool to Use?

Cloawd follows a "funnel" approach to information gathering:

1.  **Discovery (The Wide End):** Start with `web_search` or `x_scrape` to find the most relevant domains, threads, or news.
2.  **Targeting:** Identify specific high-value URLs from the discovery phase (e.g., official project docs or a detailed analyst thread).
3.  **Extraction (The Narrow End):** Use `web_fetch` for text-heavy docs or `web_scrape` for dynamic data tables and dashboards.

---

## 📈 Scaling Research Depth

Depending on the user's intent, Cloawd scales its tool usage accordingly:

* **Simple Fact (e.g., Current Price):** 1-2 tool calls (usually `web_search`).
* **Medium Research (e.g., Vibe Check):** 3-5 tool calls (mixing `x_scrape` and `web_search`).
* **Deep Analysis (e.g., Full Token Audit):** 5-10+ tool calls (utilizing the full suite to verify claims across multiple sources).

---

## 🛡️ Core Constraints

Regardless of the tool used, all web operations must adhere to these global rules:

* **Lead with Recency:** Prioritize information from the last 24-48 hours when discussing market trends.
* **Citation Required:** Every claim derived from the web must include a source attribution.
* **Copyright Hard Limits:** Maximum 15 words per quote; default to paraphrasing to ensure compliance.
* **Source Integrity:** Prefer official project repositories, verified socials, and primary documentation over secondary aggregators.

---

## 🔄 Integration Patterns

* **Narrative Verification:** Use `x_scrape` to find a trending claim, then use `web_fetch` on the project's Gitbook to see if the technical reality supports the hype.
* **Safety Audit:** Use `web_scrape` to check a token's lock status on a locker dApp, then `web_search` for any historical mentions of security vulnerabilities.

---

### 🔗 Related Documentation
* **[Analysis Framework]**: How these tools fit into our logic-flow.
* **[Prompt Gallery]**: How to trigger these tools via chat.
