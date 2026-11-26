/**
 * Source Collector Service
 * Manages external question sources, permissions, and extraction logs.
 */
import { storage } from '../utils/storage.js';

const STORAGE_SOURCES_KEY = 'plexam_sources';
const STORAGE_LOGS_KEY = 'plexam_collector_logs';

export const sourceCollector = {
  getSources() {
    return storage.get(STORAGE_SOURCES_KEY, [
      {
        id: 'src_ms_learn',
        name: 'Microsoft Learn Public Assessments',
        url: 'https://learn.microsoft.com/en-us/credentials/',
        certKey: 'PL300',
        type: 'documentation',
        enabled: true,
        lastCollectedAt: '2026-11-20',
        permission: 'Microsoft Public Documentation / CC-BY / Open Education'
      },
      {
        id: 'src_databricks_docs',
        name: 'Databricks Academy Sample Practice',
        url: 'https://www.databricks.com/learn/certification',
        certKey: 'DB_DE_ASSOC',
        type: 'practice_sample',
        enabled: true,
        lastCollectedAt: '2026-11-22',
        permission: 'Databricks Public Academy Outline'
      },
      {
        id: 'src_snowflake_guides',
        name: 'Snowflake Guides and Tutorials',
        url: 'https://docs.snowflake.com/en/user-guide/',
        certKey: 'SNOW_COF',
        type: 'documentation',
        enabled: true,
        lastCollectedAt: '2026-11-24',
        permission: 'Snowflake Documentation Educational Samples'
      },
      {
        id: 'src_anthropic_docs',
        name: 'Anthropic Claude Interactive Documentation',
        url: 'https://docs.anthropic.com/',
        certKey: 'CLAUDE_CCDV_F',
        type: 'documentation',
        enabled: true,
        lastCollectedAt: '2026-11-25',
        permission: 'Anthropic Public Documentation Examples'
      }
    ]);
  },

  addSource(source) {
    const sources = this.getSources();
    const newSource = {
      id: `src_${Date.now()}`,
      name: source.name || 'Custom Source',
      url: source.url || '',
      certKey: source.certKey || 'PL300',
      type: source.type || 'user_import',
      enabled: source.enabled !== false,
      lastCollectedAt: new Date().toISOString().split('T')[0],
      permission: source.permission || 'User Authorized Educational Material'
    };
    sources.unshift(newSource);
    storage.set(STORAGE_SOURCES_KEY, sources);
    this.logAction('SOURCE_ADDED', `Added source: ${newSource.name} (${newSource.url})`);
    return newSource;
  },

  toggleSource(id) {
    const sources = this.getSources().map(s => {
      if (s.id === id) return { ...s, enabled: !s.enabled };
      return s;
    });
    storage.set(STORAGE_SOURCES_KEY, sources);
    return sources;
  },

  getLogs() {
    return storage.get(STORAGE_LOGS_KEY, [
      {
        id: 1,
        timestamp: new Date().toISOString(),
        action: 'SYSTEM_INIT',
        message: 'Question collector system initialized.'
      }
    ]);
  },

  logAction(action, message) {
    const logs = this.getLogs();
    logs.unshift({
      id: Date.now(),
      timestamp: new Date().toISOString(),
      action,
      message
    });
    storage.set(STORAGE_LOGS_KEY, logs.slice(0, 100)); // keep last 100
  }
};
