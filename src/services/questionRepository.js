/**
 * Question Repository Service
 * Central interface for querying, approving, rejecting, filtering, and exporting questions.
 */
import { storage } from '../utils/storage.js';

const STORAGE_CUSTOM_QUESTIONS_KEY = 'plexam_custom_questions';
const STORAGE_MANIFESTS_KEY = 'plexam_manifests';

export const questionRepository = {
  getCustomQuestions() {
    return storage.get(STORAGE_CUSTOM_QUESTIONS_KEY, []);
  },

  saveCustomQuestions(questions) {
    storage.set(STORAGE_CUSTOM_QUESTIONS_KEY, questions);
  },

  getManifests() {
    return storage.get(STORAGE_MANIFESTS_KEY, {});
  },

  saveManifest(questionId, manifest) {
    const manifests = this.getManifests();
    manifests[questionId] = {
      ...manifest,
      questionId,
      updatedAt: new Date().toISOString()
    };
    storage.set(STORAGE_MANIFESTS_KEY, manifests);
  },

  addQuestions(newQuestions, sourceInfo = {}) {
    const existing = this.getCustomQuestions();
    const manifests = this.getManifests();

    newQuestions.forEach(q => {
      const qId = q.id || `q_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
      q.id = qId;
      q.reviewStatus = q.reviewStatus || 'pending'; // pending | approved | rejected
      existing.unshift(q);

      manifests[qId] = {
        questionId: qId,
        sourceName: sourceInfo.sourceName || 'Manual Import',
        sourceUrl: sourceInfo.sourceUrl || '',
        sourceType: sourceInfo.sourceType || 'user_import',
        retrievedAt: new Date().toISOString().split('T')[0],
        licenseOrPermission: sourceInfo.license || 'Public Educational Material',
        reviewStatus: q.reviewStatus,
        reviewer: sourceInfo.reviewer || 'Self'
      };
    });

    storage.set(STORAGE_CUSTOM_QUESTIONS_KEY, existing);
    storage.set(STORAGE_MANIFESTS_KEY, manifests);
    return existing;
  },

  updateQuestion(questionId, updatedFields) {
    const questions = this.getCustomQuestions().map(q => {
      if (q.id === questionId) {
        return { ...q, ...updatedFields };
      }
      return q;
    });
    this.saveCustomQuestions(questions);
    return questions;
  },

  setReviewStatus(questionId, status) {
    const questions = this.updateQuestion(questionId, { reviewStatus: status });
    const manifests = this.getManifests();
    if (manifests[questionId]) {
      manifests[questionId].reviewStatus = status;
      manifests[questionId].reviewedAt = new Date().toISOString();
      storage.set(STORAGE_MANIFESTS_KEY, manifests);
    }
    return questions;
  },

  deleteQuestion(questionId) {
    const questions = this.getCustomQuestions().filter(q => q.id !== questionId);
    this.saveCustomQuestions(questions);
    const manifests = this.getManifests();
    delete manifests[questionId];
    storage.set(STORAGE_MANIFESTS_KEY, manifests);
    return questions;
  },

  exportAsJson(questions) {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(questions, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `question_bank_export_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  },

  exportAsCsv(questions) {
    const headers = ['id', 'domain', 'question', 'option_a', 'option_b', 'option_c', 'option_d', 'correct_answers', 'explanation', 'status'];
    const rows = questions.map(q => [
      `"${q.id || ''}"`,
      `"${(q.d || '').replace(/"/g, '""')}"`,
      `"${(q.q || '').replace(/"/g, '""')}"`,
      `"${(q.o?.[0] || '').replace(/"/g, '""')}"`,
      `"${(q.o?.[1] || '').replace(/"/g, '""')}"`,
      `"${(q.o?.[2] || '').replace(/"/g, '""')}"`,
      `"${(q.o?.[3] || '').replace(/"/g, '""')}"`,
      `"${(q.a || []).join(',')}"`,
      `"${(q.e || '').replace(/"/g, '""')}"`,
      `"${q.reviewStatus || 'approved'}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `questions_export_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
};
