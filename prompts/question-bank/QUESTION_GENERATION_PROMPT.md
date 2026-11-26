# Original Question Generation Prompt & Blueprint Criteria

## 1. Quality Standards for Generated Items

1. **Scenario-Based Realism**: Questions should describe realistic production situations encountered by engineers, analysts, or developers (e.g. pipeline failures, schema drift, rate limit 429s, permission denials, query optimizations).
2. **Realistic Distractors**: Incorrect options (distractors) must represent plausible misconceptions, obsolete parameters, or real methods applied to incorrect contexts — never humorous or obviously fabricated non-options.
3. **Multi-Answer Precision**: When `multi: true`, specify explicitly in prompt ("Which two...", "Choose all that apply") and ensure `a` array contains matching 0-based indices.
4. **Comprehensive Explanation**: Explanations must articulate:
   - Why the correct option(s) succeed.
   - Why each distractor is incorrect or suboptimal.
   - Architectural or behavioral rule enforced by the platform.

## 2. Batch Validation Process

- Generate in batches of 25 questions per domain slice.
- Run through schema validation and duplicate detector before committing to certification bank.
