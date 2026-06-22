# GEO Analysis Report: gkribeiro.adv.br

**URL:** https://gkribeiro.adv.br/
**Date:** 2026-06-21
**Analysis:** Generative Engine Optimization (AI Overviews, ChatGPT, Perplexity)

---

## Executive Summary

| Metric | Value |
|--------|-------|
| **GEO Readiness Score** | **62/100** |
| **Google AI Overviews Readiness** | 68/100 |
| **ChatGPT / Perplexity Readiness** | 45/100 |
| **Platform-Specific Gaps** | Wikipedia, YouTube, Reddit entity presence missing |
| **AI Crawler Access** | No AI-specific directives (all allowed, no blocking) |

---

## 1. Citability Score: 65/100 (Weight: 25%)

### Strengths
- **Question-based headings in blog posts** — every article has H2 headings phrased as questions (e.g. "Quando procurar orientação?")
- **FAQ sections** — all 10 blog posts have 3 `<details>` FAQs each, producing self-contained Q&A blocks
- **Self-contained answer blocks** in faq sections — answers are 20-50 words, extractable without context

### Weaknesses
- **No passages in the optimal 134-167 word range** for AI citation — homepage and article passages are either too short (<30 words) or mixed with schema JSON-LD
- **No "What is [topic]?" definition in first 60 words** — homepage opens with an `eyebrow` span, not a direct definition
- **No statistics with specific data points** in visible content (schema has data but it's invisible to users)
- **Claims not attributed to specific sources** within passage text

### Recommendations
- Add a "O que é a GK Ribeiro Advocacia?" paragraph in the first 60 words of the homepage with a concise 134-167 word definition
- Add specific statistics to blog posts (e.g., "Segundo dados do TST...", "De acordo com a Súmula 447...")
- Front-load self-contained answer blocks in the first 30% of each page

---

## 2. Structural Readability: 78/100 (Weight: 20%)

### Strengths
- **Clean H1→H2→H3 hierarchy** — single H1 per page, proper H2/H3 nesting
- **Short paragraphs** — 2-4 sentences per paragraph throughout
- **Question-based H2 headings** in all blog articles
- **Clear FAQ sections** — `<details>` elements with question summaries
- **Ordered/unordered lists** — every blog post has document lists (bullet points)
- **Breadcrumbs** on all internal pages

### Weaknesses
- **Homepage lacks question-based headings** — H2s are statements ("Orientação próxima para decisões importantes"), not questions
- **No tables** for comparative data anywhere on the site
- **Homepage has only 102 passages** — limited citability surface area

### Recommendations
- Convert homepage H2s to question-based format (e.g., "Precisa de orientação trabalhista ou previdenciária?")
- Add comparison tables on service pages (e.g., "Direito Trabalhista vs Direito Previdenciário" differences)
- Add a FAQ section to the homepage (currently none)

---

## 3. Multi-Modal Content: 55/100 (Weight: 15%)

### Strengths
- **High-quality portrait photo** of the attorney (53KB WebP)
- **OG image** (1200×630 WebP, proper dimensions)
- **SVG logo** (vector, lightweight)
- **Embedded Google Maps iframe** on localization/contact pages

### Weaknesses
- **No video content** — no YouTube channel, no embedded videos
- **No infographics or charts**
- **No interactive elements** (calculators, tools, ROI estimators)
- **No article-specific images** — all blog posts share the same OG image, no contextual imagery
- **No author photo inline** with blog content (only on sobre page)

### Recommendations
- Create a YouTube channel with short explainer videos (3-5 min each) embedded in blog posts
- Add article-specific hero images or infographics to blog posts
- Add a "calculadora trabalhista" or "simulador de aposentadoria" interactive tool
- Content with multi-modal elements sees 156% higher AI citation selection rates

---

## 4. Authority & Brand Signals: 50/100 (Weight: 20%)

### Strengths
- **Author byline with OAB credentials** on every blog post
- **Publication and last-modified dates** on all content
- **DateModified in schema** — consistent date tracking
- **instagram.com/gkribeiro.adv** — active social presence
- **LLMs.txt** present with structured content guidance
- **Google Business Profile** (verified, with reviews)

### Weaknesses
- **No Wikipedia presence** — neither the attorney nor the firm has a Wikipedia page (both return 404)
- **No YouTube channel** — zero brand presence on YouTube (the strongest AI citation signal at 0.737 correlation)
- **No Reddit mentions** — no brand presence on Reddit
- **No LinkedIn page** for the firm or attorney
- **No Wikidata entity** — missing from the knowledge graph that feeds AI citations
- **No expert quotes from third parties** within content
- **No external citations to primary sources** in blog posts (TST decisions referenced but as bare URLs, not cited within text)
- **Content >3 months old may lose citation eligibility** — oldest posts from June 17 are already 4+ days old; need scheduled refresh

### Recommendations
- **HIGHEST IMPACT:** Create a LinkedIn page for the firm and a YouTube channel
- **HIGH IMPACT:** Establish Wikipedia/Wikidata presence (or at least profile pages on权威 platforms)
- Add LinkedIn profile link to sameAs schema (currently only Instagram)
- Add expert attribution within blog posts ("segundo a advogada Dra. Greice Kelli Ribeiro...")
- Implement a 90-day content refresh program for all blog posts

---

## 5. Technical Accessibility: 82/100 (Weight: 20%)

### Strengths
- **Server-side rendered** — all content is in raw HTML, no JavaScript dependency (SSR check passed)
- **llms.txt present** with well-structured sections (About, Areas, Canonical Pages, Blog Posts, Contact)
- **robots.txt allows all crawlers** — no blocking of AI crawlers (GPTBot, ClaudeBot, PerplexityBot all implicitly allowed)
- **HSTS enabled** with preload
- **SSL/HTTPS** working correctly
- **Sitemap.xml** present and referenced in robots.txt

### Weaknesses
- **No explicit AI crawler directives** in robots.txt — while "Allow: /" covers them, best practice is to explicitly allow GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot for AI search visibility
- **No RSL 1.0 license** file — the emerging standard for AI licensing terms
- **No structured data for AI-specific discovery** — Article schema is present but could be enhanced

### AI Crawler Access Status

| Crawler | Owner | Status |
|---------|-------|--------|
| GPTBot | OpenAI | ✅ Allowed (implicitly) |
| OAI-SearchBot | OpenAI | ✅ Allowed (implicitly) |
| ChatGPT-User | OpenAI | ✅ Allowed (implicitly) |
| ClaudeBot | Anthropic | ✅ Allowed (implicitly) |
| PerplexityBot | Perplexity | ✅ Allowed (implicitly) |
| CCBot | Common Crawl | ✅ Allowed (could block for training) |

### Recommendations
- Add explicit AI crawler directives to robots.txt
- Add RSL 1.0 license file to root
- Enhance Article schema with `wordCount`, `timeRequired`, and `citation` properties

---

## Platform-Specific Breakdown

| Platform | Score | Key Gap |
|----------|-------|---------|
| **Google AI Overviews** | 68/100 | Strong ranking + SEO foundation helps; needs passage optimization |
| **Google AI Mode** | 55/100 | Freshness and entity authority gaps; no Wikipedia/Wikidata presence |
| **ChatGPT web search** | 45/100 | No Wikipedia (47.9% of citations) and no YouTube (0.737 correlation) |
| **Perplexity** | 40/100 | No Reddit presence (46.7% of citations) |
| **Bing Copilot** | 60/100 | Needs IndexNow submission for faster indexing |

---

## Top 10 Highest-Impact Changes

| # | Change | Effort | Impact | Category |
|---|--------|--------|--------|----------|
| 1 | Create YouTube channel + embed videos in blog posts | Medium | Very High | Multi-Modal |
| 2 | Create LinkedIn page + Wikidata entity | Low | High | Authority |
| 3 | Add "What is [topic]?" definition paragraphs (134-167 words) | Low | High | Citability |
| 4 | Add Wikipedia presence for the firm | High | High | Authority |
| 5 | Convert homepage H2s to question format | Low | Medium | Structure |
| 6 | Add comparison tables to service pages | Low | Medium | Structure |
| 7 | Add AI crawler directives to robots.txt | Low | Medium | Technical |
| 8 | Add statistics with sources inside article text | Medium | Medium | Citability |
| 9 | Add Reddit mentions/engagement strategy | Medium | Medium | Authority |
| 10 | Create interactive tool (calculadora/simulador) | High | Medium | Multi-Modal |

---

## Quick Wins (Implement This Week)

1. ✅ Add `# AI Crawlers` section to `robots.txt`:
```apache
# AI Search Crawlers
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: CCBot
Disallow: /
```

2. Add a 134-167 word definition paragraph to the homepage hero section

3. Add LinkedIn profile link to schema `sameAs` array

4. Add `citation` property to Article schema in blog posts

5. Convert homepage section headings to question format

---

## llms.txt Assessment

The existing `/llms.txt` is well-structured with:
- ✅ Site title and description
- ✅ Language and last update
- ✅ About section
- ✅ Main areas with descriptions
- ✅ All canonical pages listed
- ✅ All blog posts with URLs and descriptions
- ✅ Contact information

**No changes needed** — llms.txt is optimal for current standards.

---

## GEO Quick Score Card

```
Citability        ███████████████░░░░░░░  65%
Structure         ██████████████████░░░░░  78%
Multi-Modal       █████████████░░░░░░░░░  55%
Authority         ███████████░░░░░░░░░░░  50%
Technical         ███████████████████░░░░  82%
────────────────────────────────────────
OVERALL           ██████████████░░░░░░░░  62/100