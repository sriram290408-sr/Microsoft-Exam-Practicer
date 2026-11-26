/**
 * Question Importer Service
 * Parses JSON and CSV formats into the application's unified schema.
 */
import { validateQuestionSchema } from './questionValidator.js';

export function parseCsvRows(csvText) {
  const lines = csvText.split(/\r?\n/).filter(line => line.trim().length > 0);
  if (lines.length < 2) return [];

  // Parse header
  const headers = parseCsvLine(lines[0]).map(h => h.trim().toLowerCase());
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCsvLine(lines[i]);
    if (values.length === 0) continue;
    const rowObj = {};
    headers.forEach((h, idx) => {
      rowObj[h] = values[idx] || '';
    });
    rows.push(rowObj);
  }
  return rows;
}

function parseCsvLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"' || char === "'") {
      if (inQuotes && line[i + 1] === char) {
        current += char;
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

export function mapCsvRowToQuestion(row, index = 0) {
  // Supports various column names
  const qText = row.question || row.q || row.prompt || '';
  const domain = row.domain || row.d || row.topic || 'General';
  const explanation = row.explanation || row.e || row.reason || 'No explanation provided.';
  const code = row.code || row.c || null;

  // Options can be option_a..d or options pipe-separated
  let options = [];
  if (row.options) {
    options = row.options.split('|').map(o => o.trim()).filter(Boolean);
  } else {
    ['option_a', 'option_b', 'option_c', 'option_d', 'option_e'].forEach(col => {
      if (row[col]) options.push(row[col].trim());
    });
    if (options.length === 0) {
      ['a', 'b', 'c', 'd'].forEach(col => {
        if (row[col]) options.push(row[col].trim());
      });
    }
  }

  // Answer indices: can be '0,1' or 'A' or 0
  let answerIndices = [];
  const rawAns = (row.answer || row.a || row.correct || '').toString().trim();
  if (rawAns.includes(',')) {
    answerIndices = rawAns.split(',').map(s => parseInt(s.trim(), 10)).filter(n => !isNaN(n));
  } else if (/^[A-E]$/i.test(rawAns)) {
    const letterMap = { A: 0, B: 1, C: 2, D: 3, E: 4 };
    answerIndices = [letterMap[rawAns.toUpperCase()]];
  } else {
    const parsed = parseInt(rawAns, 10);
    answerIndices = !isNaN(parsed) ? [parsed] : [0];
  }

  const isMulti = answerIndices.length > 1 || row.multi === 'true' || row.multi === true;

  return {
    id: `imp_${Date.now()}_${index}`,
    d: domain,
    q: qText,
    c: code,
    o: options.length >= 2 ? options : ['Option A', 'Option B', 'Option C', 'Option D'],
    a: answerIndices,
    multi: isMulti,
    e: explanation,
    difficulty: row.difficulty || 'intermediate'
  };
}

export function importQuestionsFromJson(jsonContent, defaultDomain = 'General') {
  let parsed;
  try {
    parsed = typeof jsonContent === 'string' ? JSON.parse(jsonContent) : jsonContent;
  } catch (err) {
    return { success: false, errors: ['Invalid JSON format: ' + err.message], questions: [] };
  }

  const items = Array.isArray(parsed) ? parsed : (parsed.questions || parsed.bank || []);
  const validQuestions = [];
  const errors = [];

  items.forEach((item, idx) => {
    const normalized = {
      id: item.id || `q_json_${Date.now()}_${idx}`,
      d: item.d || item.domain || defaultDomain,
      q: item.q || item.question || '',
      c: item.c || item.code || null,
      o: item.o || item.options || [],
      a: item.a || (typeof item.answer === 'number' ? [item.answer] : item.correctAnswers || [0]),
      multi: Boolean(item.multi || (item.a && item.a.length > 1)),
      e: item.e || item.explanation || 'Verified objective answer.',
      difficulty: item.difficulty || 'intermediate'
    };

    const val = validateQuestionSchema(normalized);
    if (val.valid) {
      validQuestions.push(normalized);
    } else {
      errors.push(`Item ${idx}: ${val.errors.join(', ')}`);
    }
  });

  return {
    success: validQuestions.length > 0,
    questions: validQuestions,
    errors
  };
}
