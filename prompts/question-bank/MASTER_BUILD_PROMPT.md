# Master Build Prompt — Question Bank Architecture & Lifecycle

This document defines the architecture, standard operating procedures, validation pipelines, and governance models for managing certification question banks across Microsoft, Databricks, Snowflake, and Anthropic in the Exam Practice platform.

---

## 1. Governance Principles

1. **Strict Legitimacy & Ethics**: No leaked, proprietary, or braindump exam questions. All questions must be original scenario-based items aligned with publicly available exam blueprints and official documentation.
2. **Schema Contract Consistency**: All questions must strictly adhere to the unified question schema.
3. **Traceability**: Every question generated or imported must possess an accompanying source manifest item recording retrieval dates, domain mappings, source license, and review status.
4. **Pedagogical Value**: Questions must include comprehensive, evidence-based technical explanations referencing official platform docs (Microsoft Learn, Databricks Docs, Snowflake Docs, Anthropic Docs).

---

## 2. Directory & Ingestion Topology

```text
Exam-Practice/
├── prompts/question-bank/
│   ├── MASTER_BUILD_PROMPT.md
│   ├── SCRAPING_PROMPT.md
│   ├── QUESTION_GENERATION_PROMPT.md
│   └── certifications/
│       ├── databricks-de-assoc.md
│       ├── databricks-da-assoc.md
│       ├── snowpro-core.md
│       ├── azure-dp750.md
│       ├── azure-ai103.md
│       ├── azure-ab620.md
│       └── claude-ccdv-f.md
├── question-bank-ingestion/
│   ├── schemas/question.schema.json, manifest.schema.json
│   ├── sources/
│   ├── raw/
│   ├── processed/
│   ├── reviewed/
│   ├── rejected/
│   └── logs/
└── src/
    ├── data/exams/{microsoft, databricks, snowflake, anthropic}/
    ├── services/{questionImporter, questionValidator, sourceCollector, questionRepository}.js
    └── components/question-bank/
```

---

## 3. Question Schema Specification

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "ExamQuestion",
  "type": "object",
  "required": ["id", "d", "q", "o", "a", "multi", "e"],
  "properties": {
    "id": { "type": "string" },
    "d": { "type": "string", "description": "Domain code matching exam domain map" },
    "q": { "type": "string", "description": "Scenario and question prompt" },
    "c": { "type": ["string", "null"], "description": "Optional SQL, Python, JSON code block" },
    "o": { "type": "array", "items": { "type": "string" }, "minItems": 4, "maxItems": 6 },
    "a": { "type": "array", "items": { "type": "integer" }, "minItems": 1 },
    "multi": { "type": "boolean" },
    "e": { "type": "string", "description": "Technical explanation and rationale" }
  }
}
```

---

## 4. Multi-Platform Certification Catalog

| Platform | Exam Code | Official Certification Title | Default Min | Exam Structure |
|---|---|---|---|---|
| Microsoft | PL-300 | Microsoft Certified: Power BI Data Analyst Associate | 120m | 200 Qs (2 sections x 100 Qs) |
| Microsoft | PL-900 | Microsoft Certified: Power Platform Fundamentals | 120m | 200 Qs (2 sections x 100 Qs) |
| Microsoft | DP-600 | Implementing Analytics Solutions Using Fabric | 120m | 200 Qs (2 sections x 100 Qs) |
| Microsoft | DP-700 | Implementing Data Engineering Solutions on Fabric | 120m | 200 Qs (2 sections x 100 Qs) |
| Microsoft | DP-800 | Designing and Implementing Cloud Data Platform Solutions | 120m | 200 Qs (2 sections x 100 Qs) |
| Databricks | DE-ASSOC | Databricks Certified Data Engineer Associate | 90m | 100 Qs (1 section) |
| Databricks | DA-ASSOC | Databricks Certified Data Analyst Associate | 90m | 100 Qs (1 section) |
| Snowflake | COF-C03 | SnowPro Core Certification | 115m | 100 Qs (1 section) |
| Microsoft | DP-750 | Azure Databricks Data Engineer Associate | 100m | 100 Qs (1 section) |
| Microsoft | AI-103 | Azure AI Apps and Agents Developer Associate | 100m | 100 Qs (1 section) |
| Microsoft | AB-620 | Microsoft Certified: AI Agent Builder Associate | 100m | 100 Qs (1 section) |
| Anthropic | CCDV-F | Claude Certified Developer – Foundations | 90m | 100 Qs (1 section) |
