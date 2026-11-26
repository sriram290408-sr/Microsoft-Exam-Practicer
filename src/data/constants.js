// Storage keys and exam limits
export const STORAGE_KEYS = {
  SAVE: 'plexam_save',
  HISTORY: 'plexam_hist',
  PREFERENCES: 'plexam_prefs'
};

export const MAX_PAUSES = 2;
export const PASSING_SCORE = 70; // 70% threshold
export const QUESTIONS_PER_SECTION = 100;
export const TOTAL_EXAM_QUESTIONS = 200;

// Default timing constants (for 200Q exams: 60m + 60m)
export const SECTION_DURATION_SECONDS = 3600; // 60 minutes per section
export const BREAK_DURATION_SECONDS = 600;    // 10-minute break (not counted in exam time)

export const EXAM_COLORS = {
  // Existing Microsoft
  PL300: '#F2C811',
  PL900: '#742774',
  DP600: '#0E7C86',
  DP700: '#107C41',
  DP800: '#0B5CAD',
  // Databricks
  DB_DE_ASSOC: '#E25A1C',
  DB_DA_ASSOC: '#FF3621',
  // Snowflake
  SNOW_COF: '#29B5E8',
  // Microsoft New
  MS_DP750: '#0078D4',
  MS_AI103: '#8E44AD',
  MS_AB620: '#16A085',
  // Anthropic Claude
  ANTH_CCDV_F: '#D97706'
};

export const DOMAIN_COLORS = {
  P: 'var(--prep, #0B5CAD)',
  M: 'var(--model, #E25A1C)',
  V: 'var(--viz, #107C41)',
  S: 'var(--secure, #742774)',
  DIP: 'var(--prep, #0B5CAD)',
  DIL: 'var(--model, #E25A1C)',
  DTM: 'var(--viz, #107C41)',
  LFJ: 'var(--secure, #742774)',
  CICD: 'var(--prep, #0E7C86)',
  TMO: 'var(--model, #F2C811)',
  GOV: 'var(--viz, #E81123)',
  ARCH: 'var(--prep, #29B5E8)',
  QUERY: 'var(--model, #11567F)',
  LOAD: 'var(--secure, #107C41)',
  SHARE: 'var(--prep, #742774)',
  ENV: 'var(--prep, #0078D4)',
  UC: 'var(--model, #107C41)',
  PROC: 'var(--viz, #F2C811)',
  PIPE: 'var(--secure, #742774)',
  PLAN: 'var(--prep, #0078D4)',
  AGENT: 'var(--model, #8E44AD)',
  VISION: 'var(--viz, #27AE60)',
  TEXT: 'var(--secure, #E67E22)',
  INFO: 'var(--prep, #E74C3C)',
  EXT: 'var(--model, #16A085)',
  ALM: 'var(--viz, #D35400)',
  WORK: 'var(--prep, #D97706)',
  API: 'var(--model, #2563EB)',
  MCP: 'var(--viz, #059669)',
  ENG: 'var(--secure, #9333EA)',
  SEC: 'var(--prep, #DC2626)',
  CODE: 'var(--model, #4B5563)'
};
