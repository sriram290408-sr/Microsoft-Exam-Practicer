/**
 * Question Validator Service
 * Validates individual question schemas and detects duplicates.
 */

export function validateQuestionSchema(q) {
  const errors = [];
  if (!q) return { valid: false, errors: ['Question is null or undefined'] };

  if (typeof q.q !== 'string' || q.q.trim().length < 8) {
    errors.push('Question text (q) must be at least 8 characters long');
  }

  if (typeof q.d !== 'string' || q.d.trim().length === 0) {
    errors.push('Domain (d) is required');
  }

  if (!Array.isArray(q.o) || q.o.length < 2) {
    errors.push('Options (o) must be an array with at least 2 items');
  } else {
    q.o.forEach((opt, idx) => {
      if (typeof opt !== 'string' || opt.trim().length === 0) {
        errors.push(`Option at index ${idx} is empty or not a string`);
      }
    });
  }

  if (!Array.isArray(q.a) || q.a.length === 0) {
    errors.push('Correct answers (a) must be a non-empty array of indices');
  } else if (Array.isArray(q.o)) {
    q.a.forEach((ansIdx) => {
      if (typeof ansIdx !== 'number' || ansIdx < 0 || ansIdx >= q.o.length) {
        errors.push(`Answer index ${ansIdx} is out of bounds for options length ${q.o.length}`);
      }
    });
  }

  if (typeof q.e !== 'string' || q.e.trim().length === 0) {
    errors.push('Explanation (e) is required');
  }

  if (q.multi !== undefined && typeof q.multi !== 'boolean') {
    errors.push('multi must be a boolean if provided');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Normalized token overlap calculation for duplicate detection
 */
function normalizeText(txt) {
  return (txt || '')
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function calculateSimilarity(text1, text2) {
  const norm1 = normalizeText(text1);
  const norm2 = normalizeText(text2);
  if (norm1 === norm2) return 1.0;

  const set1 = new Set(norm1.split(' ').filter(w => w.length > 2));
  const set2 = new Set(norm2.split(' ').filter(w => w.length > 2));
  if (set1.size === 0 || set2.size === 0) return 0;

  const intersection = new Set([...set1].filter(x => set2.has(x)));
  const union = new Set([...set1, ...set2]);

  return intersection.size / union.size;
}

export function detectDuplicate(candidateQuestion, existingQuestions, threshold = 0.85) {
  for (const existing of existingQuestions) {
    const similarity = calculateSimilarity(candidateQuestion.q, existing.q);
    if (similarity >= threshold) {
      return {
        isDuplicate: true,
        matchedQuestion: existing,
        similarity: Math.round(similarity * 100)
      };
    }
  }
  return { isDuplicate: false, similarity: 0 };
}
