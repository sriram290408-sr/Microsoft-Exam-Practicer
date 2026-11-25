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

// Timing: 60 minutes per section, break excluded from total
export const SECTION_DURATION_SECONDS = 3600; // 60 minutes per section
export const BREAK_DURATION_SECONDS = 600;    // 10-minute break (not counted in exam time)

export const EXAM_COLORS = {
  PL300: '#F2C811',
  PL900: '#742774',
  DP600: '#0E7C86',
  DP700: '#107C41',
  DP800: '#0B5CAD'
};

export const DOMAIN_COLORS = {
  P: 'var(--prep)',
  M: 'var(--model)',
  V: 'var(--viz)',
  S: 'var(--secure)'
};
