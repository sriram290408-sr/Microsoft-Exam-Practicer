import React, { useState } from 'react';
import { EXAM_LIST, PLATFORMS } from '../../data/exams/index.js';
import { sourceCollector } from '../../services/sourceCollector.js';
import { questionRepository } from '../../services/questionRepository.js';
import { importQuestionsFromJson, parseCsvRows, mapCsvRowToQuestion } from '../../services/questionImporter.js';
import { validateQuestionSchema, detectDuplicate } from '../../services/questionValidator.js';

export function QuestionBankManager({ onClose, onRefreshExams }) {
  const [activeTab, setActiveTab] = useState('dashboard'); // dashboard | sources | import | review | repository
  const [sources, setSources] = useState(() => sourceCollector.getSources());
  const [logs, setLogs] = useState(() => sourceCollector.getLogs());
  const [customQuestions, setCustomQuestions] = useState(() => questionRepository.getCustomQuestions());
  const [manifests, setManifests] = useState(() => questionRepository.getManifests());

  // New source form state
  const [newSourceName, setNewSourceName] = useState('');
  const [newSourceUrl, setNewSourceUrl] = useState('');
  const [newSourceCert, setNewSourceCert] = useState('PL300');
  const [newSourceType, setNewSourceType] = useState('documentation');
  const [newSourcePerm, setNewSourcePerm] = useState('Public Educational Documentation');

  // Import state
  const [importCert, setImportCert] = useState('PL300');
  const [importDomain, setImportDomain] = useState('General');
  const [importText, setImportText] = useState('');
  const [importFormat, setImportFormat] = useState('json'); // json | csv
  const [importFeedback, setImportFeedback] = useState(null);
  const [previewQuestions, setPreviewQuestions] = useState([]);

  // Repository filters
  const [filterPlatform, setFilterPlatform] = useState('All');
  const [filterCert, setFilterCert] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Editing modal state
  const [editingQuestion, setEditingQuestion] = useState(null);

  // --- Handlers: Sources ---
  const handleAddSource = (e) => {
    e.preventDefault();
    if (!newSourceName.trim() || !newSourceUrl.trim()) return;
    const added = sourceCollector.addSource({
      name: newSourceName.trim(),
      url: newSourceUrl.trim(),
      certKey: newSourceCert,
      type: newSourceType,
      permission: newSourcePerm
    });
    setSources(sourceCollector.getSources());
    setLogs(sourceCollector.getLogs());
    setNewSourceName('');
    setNewSourceUrl('');
    alert(`Source "${added.name}" added successfully.`);
  };

  const handleToggleSource = (id) => {
    const updated = sourceCollector.toggleSource(id);
    setSources(updated);
    setLogs(sourceCollector.getLogs());
  };

  // --- Handlers: Import ---
  const handleParseImport = () => {
    setImportFeedback(null);
    setPreviewQuestions([]);
    if (!importText.trim()) {
      setImportFeedback({ error: 'Please paste JSON or CSV text to import.' });
      return;
    }

    if (importFormat === 'json') {
      const res = importQuestionsFromJson(importText, importDomain);
      if (!res.success) {
        setImportFeedback({ error: 'Failed to parse JSON:\n' + res.errors.join('\n') });
      } else {
        setPreviewQuestions(res.questions);
        setImportFeedback({ success: `Parsed ${res.questions.length} valid questions! Review below before saving.` });
      }
    } else {
      // CSV
      try {
        const rows = parseCsvRows(importText);
        if (rows.length === 0) {
          setImportFeedback({ error: 'No data rows found in CSV. Ensure header row is present.' });
          return;
        }
        const questions = rows.map((r, i) => mapCsvRowToQuestion(r, i));
        setPreviewQuestions(questions);
        setImportFeedback({ success: `Parsed ${questions.length} questions from CSV! Review below before saving.` });
      } catch (err) {
        setImportFeedback({ error: 'CSV parsing error: ' + err.message });
      }
    }
  };

  const handleCommitImport = () => {
    if (previewQuestions.length === 0) return;
    const certExam = EXAM_LIST.find(e => e.id === importCert);
    const existing = (certExam?.bank || []).concat(customQuestions.filter(q => q.certKey === importCert));

    // Duplicate check
    const deduped = [];
    let duplicatesFound = 0;

    previewQuestions.forEach(q => {
      const dup = detectDuplicate(q, existing, 0.85);
      if (dup.isDuplicate) {
        duplicatesFound++;
        q.reviewStatus = 'pending';
        q.duplicateWarning = `Possible duplicate of existing item (${dup.similarity}% similarity)`;
      } else {
        q.reviewStatus = 'approved';
      }
      q.certKey = importCert;
      deduped.push(q);
    });

    questionRepository.addQuestions(deduped, {
      sourceName: `Import (${importFormat.toUpperCase()}) for ${importCert}`,
      sourceUrl: '',
      sourceType: 'user_import'
    });

    sourceCollector.logAction('IMPORT_COMMIT', `Imported ${deduped.length} questions for ${importCert} (${duplicatesFound} duplicates flagged)`);
    setCustomQuestions(questionRepository.getCustomQuestions());
    setManifests(questionRepository.getManifests());
    setPreviewQuestions([]);
    setImportText('');
    setImportFeedback({ success: `Successfully committed ${deduped.length} questions! (${duplicatesFound} flagged for review).` });
  };

  // --- Handlers: Review & Editing ---
  const handleStatusChange = (qId, status) => {
    const updated = questionRepository.setReviewStatus(qId, status);
    setCustomQuestions(updated);
    setManifests(questionRepository.getManifests());
    sourceCollector.logAction('STATUS_UPDATE', `Question ${qId} status set to ${status}`);
  };

  const handleDeleteQuestion = (qId) => {
    if (!window.confirm('Delete this question permanently?')) return;
    const updated = questionRepository.deleteQuestion(qId);
    setCustomQuestions(updated);
    setManifests(questionRepository.getManifests());
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    if (!editingQuestion) return;
    const val = validateQuestionSchema(editingQuestion);
    if (!val.valid) {
      alert('Validation Error:\n' + val.errors.join('\n'));
      return;
    }
    const updated = questionRepository.updateQuestion(editingQuestion.id, editingQuestion);
    setCustomQuestions(updated);
    setEditingQuestion(null);
    alert('Question updated successfully!');
  };

  // --- Repository stats ---
  const totalBuiltin = EXAM_LIST.reduce((sum, e) => sum + e.bank.length, 0);
  const totalCustom = customQuestions.length;
  const approvedCustom = customQuestions.filter(q => q.reviewStatus === 'approved').length;
  const pendingCustom = customQuestions.filter(q => q.reviewStatus === 'pending').length;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(4, 7, 17, 0.95)',
        zIndex: 10000,
        overflowY: 'auto',
        padding: '24px 16px',
        color: '#E2E8F0',
        fontFamily: 'system-ui, sans-serif'
      }}
    >
      <div
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          background: '#0D1526',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.12)',
          padding: '28px',
          boxShadow: '0 24px 60px rgba(0,0,0,0.6)'
        }}
      >
        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.6rem', color: '#F1F5F9' }}>
              ⚙ Question Bank Manager &amp; Ingestion Hub
            </h1>
            <p style={{ margin: '4px 0 0', color: '#94A3B8', fontSize: '0.9rem' }}>
              12 Active Certifications · {totalBuiltin + approvedCustom} Approved Questions · Schema-Validated Governance
            </p>
          </div>
          <button
            type="button"
            className="btn ghost"
            onClick={onClose}
            style={{ fontSize: '1rem', padding: '8px 20px' }}
          >
            ✕ Close &amp; Return
          </button>
        </div>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.12)', paddingBottom: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
          {[
            { id: 'dashboard', label: '📊 Dashboard & Metrics' },
            { id: 'sources', label: '🌐 Source Management' },
            { id: 'import', label: '📥 Question Import (JSON/CSV)' },
            { id: 'review', label: `🔍 Review Queue (${pendingCustom})` },
            { id: 'repository', label: '📚 Question Repository' }
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: activeTab === tab.id ? 'var(--accent, #B8860B)' : 'rgba(255,255,255,0.05)',
                color: activeTab === tab.id ? '#fff' : '#94A3B8',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 16px',
                fontWeight: activeTab === tab.id ? 700 : 500,
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* --- TAB 1: DASHBOARD --- */}
        {activeTab === 'dashboard' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '28px' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '18px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Total Certifications</span>
                <h2 style={{ margin: '8px 0 0', fontSize: '2rem', color: '#38BDF8' }}>{EXAM_LIST.length}</h2>
                <small style={{ color: '#64748B' }}>Across 4 major platforms</small>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '18px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Total Approved Questions</span>
                <h2 style={{ margin: '8px 0 0', fontSize: '2rem', color: '#4ADE80' }}>{totalBuiltin + approvedCustom}</h2>
                <small style={{ color: '#64748B' }}>{totalBuiltin} built-in + {approvedCustom} custom</small>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '18px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Pending Review Queue</span>
                <h2 style={{ margin: '8px 0 0', fontSize: '2rem', color: '#FBBF24' }}>{pendingCustom}</h2>
                <small style={{ color: '#64748B' }}>Awaiting moderator approval</small>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '18px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Registered Sources</span>
                <h2 style={{ margin: '8px 0 0', fontSize: '2rem', color: '#A855F7' }}>{sources.length}</h2>
                <small style={{ color: '#64748B' }}>{sources.filter(s => s.enabled).length} enabled</small>
              </div>
            </div>

            {/* Certification Breakdown Table */}
            <h3 style={{ fontSize: '1.2rem', marginBottom: '14px' }}>Platform &amp; Certification Bank Breakdown</h3>
            <div style={{ overflowX: 'auto', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)' }}>
                    <th style={{ padding: '12px 16px' }}>Platform</th>
                    <th style={{ padding: '12px 16px' }}>Code</th>
                    <th style={{ padding: '12px 16px' }}>Certification Name</th>
                    <th style={{ padding: '12px 16px' }}>Duration</th>
                    <th style={{ padding: '12px 16px' }}>Questions</th>
                    <th style={{ padding: '12px 16px' }}>Domains</th>
                  </tr>
                </thead>
                <tbody>
                  {EXAM_LIST.map(exam => {
                    const domainNames = Object.values(exam.doms || {}).map(d => typeof d === 'object' ? d.name : d).join(', ');
                    return (
                      <tr key={exam.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px 16px', fontWeight: 600 }}>{exam.platform || 'Microsoft'}</td>
                        <td style={{ padding: '12px 16px', fontFamily: 'monospace', color: '#38BDF8' }}>{exam.code}</td>
                        <td style={{ padding: '12px 16px' }}>{exam.name}</td>
                        <td style={{ padding: '12px 16px' }}>{exam.min} min</td>
                        <td style={{ padding: '12px 16px' }}>
                          <span style={{ background: 'rgba(74, 222, 128, 0.15)', color: '#4ADE80', padding: '2px 8px', borderRadius: '12px', fontWeight: 700 }}>
                            {exam.bank.length}
                          </span>
                        </td>
                        <td style={{ padding: '12px 16px', maxWidth: '320px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: '#94A3B8' }} title={domainNames}>
                          {domainNames}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* --- TAB 2: SOURCES --- */}
        {activeTab === 'sources' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px' }}>
              {/* Add Source Form */}
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 style={{ margin: '0 0 16px', fontSize: '1.15rem' }}>➕ Add Permitted Question Source</h3>
                <form onSubmit={handleAddSource}>
                  <label style={{ display: 'block', marginBottom: '12px', fontSize: '0.85rem', color: '#94A3B8' }}>
                    Source Name:
                    <input
                      type="text"
                      value={newSourceName}
                      onChange={e => setNewSourceName(e.target.value)}
                      placeholder="e.g. Official Snowflake Documentation Quiz"
                      required
                      style={{ width: '100%', marginTop: '4px', padding: '8px 12px', background: '#040711', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', color: '#fff' }}
                    />
                  </label>

                  <label style={{ display: 'block', marginBottom: '12px', fontSize: '0.85rem', color: '#94A3B8' }}>
                    Public Source URL:
                    <input
                      type="url"
                      value={newSourceUrl}
                      onChange={e => setNewSourceUrl(e.target.value)}
                      placeholder="https://..."
                      required
                      style={{ width: '100%', marginTop: '4px', padding: '8px 12px', background: '#040711', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', color: '#fff' }}
                    />
                  </label>

                  <label style={{ display: 'block', marginBottom: '12px', fontSize: '0.85rem', color: '#94A3B8' }}>
                    Target Certification:
                    <select
                      value={newSourceCert}
                      onChange={e => setNewSourceCert(e.target.value)}
                      style={{ width: '100%', marginTop: '4px', padding: '8px 12px', background: '#040711', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', color: '#fff' }}
                    >
                      {EXAM_LIST.map(e => (
                        <option key={e.id} value={e.id}>{e.code} - {e.name}</option>
                      ))}
                    </select>
                  </label>

                  <label style={{ display: 'block', marginBottom: '16px', fontSize: '0.85rem', color: '#94A3B8' }}>
                    Permission / License Verification:
                    <input
                      type="text"
                      value={newSourcePerm}
                      onChange={e => setNewSourcePerm(e.target.value)}
                      placeholder="e.g. CC-BY 4.0 / Public Courseware / Permitted Docs"
                      required
                      style={{ width: '100%', marginTop: '4px', padding: '8px 12px', background: '#040711', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', color: '#fff' }}
                    />
                  </label>

                  <button type="submit" className="btn accent" style={{ width: '100%' }}>
                    Register Verified Source
                  </button>
                </form>
              </div>

              {/* Source List */}
              <div>
                <h3 style={{ margin: '0 0 16px', fontSize: '1.15rem' }}>Active Question Sources ({sources.length})</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {sources.map(src => (
                    <div
                      key={src.id}
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        padding: '14px 16px',
                        borderRadius: '10px',
                        border: '1px solid rgba(255,255,255,0.08)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 600, color: '#F1F5F9' }}>{src.name}</div>
                        <a href={src.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', color: '#38BDF8', textDecoration: 'none' }}>
                          {src.url}
                        </a>
                        <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '4px' }}>
                          Cert: <b style={{ color: '#FCD34D' }}>{src.certKey}</b> · License: {src.permission}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleToggleSource(src.id)}
                        className={`btn small ${src.enabled ? 'accent' : 'ghost'}`}
                        style={{ fontSize: '0.75rem' }}
                      >
                        {src.enabled ? '✓ Enabled' : 'Disabled'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ingestion Audit Logs */}
            <div style={{ marginTop: '32px' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '12px' }}>Ingestion &amp; Activity Logs</h3>
              <div style={{ maxHeight: '180px', overflowY: 'auto', background: '#040711', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'monospace', fontSize: '0.8rem' }}>
                {logs.map(log => (
                  <div key={log.id} style={{ marginBottom: '6px', color: '#94A3B8' }}>
                    <span style={{ color: '#64748B' }}>[{new Date(log.timestamp).toLocaleTimeString()}]</span>{' '}
                    <b style={{ color: '#38BDF8' }}>[{log.action}]</b> {log.message}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 3: IMPORT --- */}
        {activeTab === 'import' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '16px' }}>
              <label style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
                Target Certification:
                <select
                  value={importCert}
                  onChange={e => setImportCert(e.target.value)}
                  style={{ width: '100%', marginTop: '4px', padding: '8px 12px', background: '#040711', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', color: '#fff' }}
                >
                  {EXAM_LIST.map(e => (
                    <option key={e.id} value={e.id}>{e.platform || 'Microsoft'} - {e.code} ({e.name})</option>
                  ))}
                </select>
              </label>

              <label style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
                Default Domain Code:
                <input
                  type="text"
                  value={importDomain}
                  onChange={e => setImportDomain(e.target.value)}
                  placeholder="e.g. DIP, ARCH, PLAN"
                  style={{ width: '100%', marginTop: '4px', padding: '8px 12px', background: '#040711', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', color: '#fff' }}
                />
              </label>

              <label style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
                Import Format:
                <select
                  value={importFormat}
                  onChange={e => setImportFormat(e.target.value)}
                  style={{ width: '100%', marginTop: '4px', padding: '8px 12px', background: '#040711', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', color: '#fff' }}
                >
                  <option value="json">JSON Array of Questions</option>
                  <option value="csv">CSV (with question, options, answer columns)</option>
                </select>
              </label>
            </div>

            <label style={{ display: 'block', fontSize: '0.85rem', color: '#94A3B8', marginBottom: '8px' }}>
              Paste {importFormat.toUpperCase()} Content or Upload File:
              <textarea
                rows={10}
                value={importText}
                onChange={e => setImportText(e.target.value)}
                placeholder={importFormat === 'json'
                  ? '[\n  {\n    "q": "Scenario description...",\n    "d": "DIP",\n    "o": ["Option 1", "Option 2", "Option 3", "Option 4"],\n    "a": [0],\n    "e": "Detailed explanation..."\n  }\n]'
                  : 'question,domain,option_a,option_b,option_c,option_d,answer,explanation\n"Sample question?","ARCH","Opt A","Opt B","Opt C","Opt D","0","Explanation here"'}
                style={{ width: '100%', marginTop: '6px', padding: '12px', background: '#040711', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', color: '#fff', fontFamily: 'monospace', fontSize: '0.85rem' }}
              />
            </label>

            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <button type="button" className="btn ghost" onClick={handleParseImport}>
                🔍 Parse &amp; Validate Preview
              </button>
              {previewQuestions.length > 0 && (
                <button type="button" className="btn accent" onClick={handleCommitImport}>
                  💾 Commit {previewQuestions.length} Items to Question Bank
                </button>
              )}
            </div>

            {importFeedback && (
              <div style={{ padding: '12px 16px', borderRadius: '8px', marginBottom: '20px', background: importFeedback.error ? 'rgba(239, 68, 68, 0.15)' : 'rgba(74, 222, 128, 0.15)', border: `1px solid ${importFeedback.error ? '#EF4444' : '#4ADE80'}`, color: importFeedback.error ? '#FCA5A5' : '#86EFAC' }}>
                <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{importFeedback.error || importFeedback.success}</pre>
              </div>
            )}

            {previewQuestions.length > 0 && (
              <div>
                <h4>Preview Parsed Questions ({previewQuestions.length})</h4>
                <div style={{ maxHeight: '280px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {previewQuestions.slice(0, 5).map((q, idx) => (
                    <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 14px', borderRadius: '6px', fontSize: '0.85rem' }}>
                      <b>Q{idx + 1} [{q.d}]:</b> {q.q}
                      <div style={{ color: '#94A3B8', marginTop: '4px' }}>
                        Options: {q.o.join(' | ')} (Correct: {q.a.join(', ')})
                      </div>
                    </div>
                  ))}
                  {previewQuestions.length > 5 && (
                    <div style={{ textAlign: 'center', color: '#64748B', fontSize: '0.85rem' }}>
                      + {previewQuestions.length - 5} more questions ready to commit
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* --- TAB 4: REVIEW QUEUE --- */}
        {activeTab === 'review' && (
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '14px' }}>Review &amp; Approval Queue</h3>
            {customQuestions.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px', color: '#64748B' }}>
                No custom or imported questions found in the review queue. Import questions from Tab 3.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {customQuestions.map(q => {
                  const manifest = manifests[q.id] || {};
                  return (
                    <div
                      key={q.id}
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        padding: '16px',
                        borderRadius: '10px',
                        border: `1px solid ${q.reviewStatus === 'approved' ? '#4ADE80' : q.reviewStatus === 'rejected' ? '#EF4444' : '#FBBF24'}`
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                          ID: {q.id} · Domain: <b>{q.d}</b> · Cert: <b>{q.certKey || 'General'}</b>
                        </span>
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: q.reviewStatus === 'approved' ? '#4ADE80' : q.reviewStatus === 'rejected' ? '#EF4444' : '#FBBF24' }}>
                          Status: {q.reviewStatus ? q.reviewStatus.toUpperCase() : 'PENDING'}
                        </span>
                      </div>

                      <p style={{ margin: '8px 0', fontSize: '0.95rem' }}>{q.q}</p>
                      {q.c && <pre style={{ background: '#040711', padding: '8px', borderRadius: '4px', fontSize: '0.8rem' }}>{q.c}</pre>}

                      <div style={{ fontSize: '0.85rem', color: '#94A3B8', margin: '6px 0' }}>
                        <b>Options:</b>
                        <ul>
                          {q.o?.map((opt, oIdx) => (
                            <li key={oIdx} style={{ color: q.a?.includes(oIdx) ? '#4ADE80' : 'inherit' }}>
                              {opt} {q.a?.includes(oIdx) && '✓ (Correct)'}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p style={{ fontSize: '0.82rem', color: '#CBD5E1', fontStyle: 'italic' }}>
                        <b>Explanation:</b> {q.e}
                      </p>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '10px' }}>
                        <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
                          Source: {manifest.sourceName || 'Manual Import'} · {manifest.retrievedAt || 'Recent'}
                        </span>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button type="button" className="btn small" onClick={() => setEditingQuestion(q)}>
                            ✏ Edit
                          </button>
                          <button type="button" className="btn small" style={{ background: 'rgba(74, 222, 128, 0.2)', color: '#4ADE80', border: '1px solid #4ADE80' }} onClick={() => handleStatusChange(q.id, 'approved')}>
                            ✓ Approve
                          </button>
                          <button type="button" className="btn small" style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#EF4444', border: '1px solid #EF4444' }} onClick={() => handleStatusChange(q.id, 'rejected')}>
                            ✕ Reject
                          </button>
                          <button type="button" className="btn small ghost" onClick={() => handleDeleteQuestion(q.id)}>
                            🗑 Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* --- TAB 5: REPOSITORY & EXPORT --- */}
        {activeTab === 'repository' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <select
                  value={filterPlatform}
                  onChange={e => setFilterPlatform(e.target.value)}
                  style={{ padding: '6px 12px', background: '#040711', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', color: '#fff', fontSize: '0.85rem' }}
                >
                  <option value="All">All Platforms</option>
                  {PLATFORMS.filter(p => p !== 'All').map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>

                <select
                  value={filterCert}
                  onChange={e => setFilterCert(e.target.value)}
                  style={{ padding: '6px 12px', background: '#040711', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', color: '#fff', fontSize: '0.85rem' }}
                >
                  <option value="All">All Certifications</option>
                  {EXAM_LIST.map(e => (
                    <option key={e.id} value={e.id}>{e.code}</option>
                  ))}
                </select>

                <input
                  type="text"
                  placeholder="Search questions by keyword..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  style={{ padding: '6px 12px', background: '#040711', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', color: '#fff', fontSize: '0.85rem', minWidth: '220px' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  className="btn ghost small"
                  onClick={() => {
                    const allQs = EXAM_LIST.flatMap(e => e.bank).concat(customQuestions);
                    questionRepository.exportAsJson(allQs);
                  }}
                >
                  📤 Export All (JSON)
                </button>
                <button
                  type="button"
                  className="btn ghost small"
                  onClick={() => {
                    const allQs = EXAM_LIST.flatMap(e => e.bank).concat(customQuestions);
                    questionRepository.exportAsCsv(allQs);
                  }}
                >
                  📤 Export All (CSV)
                </button>
              </div>
            </div>

            {/* List preview of questions matching filters */}
            <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '12px', padding: '16px', maxHeight: '450px', overflowY: 'auto' }}>
              {(() => {
                let candidateExams = EXAM_LIST;
                if (filterPlatform !== 'All') {
                  candidateExams = candidateExams.filter(e => (e.platform || 'Microsoft') === filterPlatform);
                }
                if (filterCert !== 'All') {
                  candidateExams = candidateExams.filter(e => e.id === filterCert);
                }

                let displayList = candidateExams.flatMap(e => e.bank.map(q => ({ ...q, certCode: e.code, platform: e.platform })));
                if (searchQuery.trim()) {
                  const qLower = searchQuery.toLowerCase();
                  displayList = displayList.filter(item => item.q.toLowerCase().includes(qLower) || item.e.toLowerCase().includes(qLower));
                }

                return (
                  <div>
                    <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '10px' }}>
                      Showing {displayList.length} questions matching criteria
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {displayList.slice(0, 30).map((item, idx) => (
                        <div key={idx} style={{ background: 'rgba(255,255,255,0.02)', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px' }}>
                            <span style={{ fontSize: '0.75rem', background: '#0284C7', color: '#fff', padding: '1px 6px', borderRadius: '4px' }}>
                              {item.certCode}
                            </span>
                            <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.1)', padding: '1px 6px', borderRadius: '4px' }}>
                              {item.d}
                            </span>
                          </div>
                          <div style={{ fontSize: '0.9rem', color: '#F1F5F9' }}>{item.q}</div>
                        </div>
                      ))}
                      {displayList.length > 30 && (
                        <div style={{ textAlign: 'center', color: '#64748B', padding: '8px', fontSize: '0.85rem' }}>
                          + {displayList.length - 30} more questions in bank (export to view all)
                        </div>
                      )}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* Edit Modal */}
        {editingQuestion && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.85)',
              zIndex: 10001,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}
          >
            <div style={{ maxWidth: '600px', width: '100%', background: '#0D1526', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)' }}>
              <h3 style={{ margin: '0 0 16px' }}>Edit Question ({editingQuestion.id})</h3>
              <form onSubmit={handleSaveEdit}>
                <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.85rem' }}>
                  Question Text:
                  <textarea
                    rows={3}
                    value={editingQuestion.q}
                    onChange={e => setEditingQuestion({ ...editingQuestion, q: e.target.value })}
                    style={{ width: '100%', padding: '8px', background: '#040711', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px' }}
                  />
                </label>

                <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.85rem' }}>
                  Domain:
                  <input
                    type="text"
                    value={editingQuestion.d}
                    onChange={e => setEditingQuestion({ ...editingQuestion, d: e.target.value })}
                    style={{ width: '100%', padding: '8px', background: '#040711', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px' }}
                  />
                </label>

                <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.85rem' }}>
                  Explanation:
                  <textarea
                    rows={2}
                    value={editingQuestion.e}
                    onChange={e => setEditingQuestion({ ...editingQuestion, e: e.target.value })}
                    style={{ width: '100%', padding: '8px', background: '#040711', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px' }}
                  />
                </label>

                <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '16px' }}>
                  <button type="button" className="btn ghost" onClick={() => setEditingQuestion(null)}>Cancel</button>
                  <button type="submit" className="btn accent">Save Changes</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
