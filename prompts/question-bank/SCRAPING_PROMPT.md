# Permitted Scraping & Extraction Protocols

## 1. Compliance and Ethical Guardrails

- **Robots.txt & Licensing**: Prior to querying or retrieving public web pages, robots.txt directives and terms of use must be checked. Only publicly licensed open courseware, documentation sample quizzes, and user-provided study materials are eligible.
- **Strict Anti-Circumvention**: Never bypass paywalls, rate limiters, CAPTCHAs, or authentication barriers.
- **Zero Braindumps**: Any source suspected of hosting copyrighted, proprietary, or live exam question leaks must be rejected immediately and logged into `question-bank-ingestion/rejected/`.
- **Verified Answers Only**: If a source lacks an unambiguously verified correct answer, mark with `reviewStatus: "pending"` or reject.

## 2. Ingestion Formats

- **JSON Format**: Direct import of arrays matching the Question Schema or Source Raw Object.
- **CSV Format**: Column mappings for `question`, `domain`, `option_a`, `option_b`, `option_c`, `option_d`, `answer`, `explanation`, `is_multi`.
- **HTML Extraction**: Sanitized parser for sample quiz DOM trees extracting `<legend>`, `<label>`, `<input>`, and answer explanation blocks.

## 3. Duplicate Detection

- Normalized Jaccard similarity and string levenshtein hash on question prompt text.
- If similarity > 88% against an existing question within the same certification bank, flag as duplicate and send to review queue.
