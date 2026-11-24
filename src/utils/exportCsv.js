/**
 * Generates and triggers download of exam results as CSV
 */
export function exportResultsCsv(exam, items, answers, timeSpentPerQuestion = []) {
  const headers = [
    'Question Number',
    'Domain',
    'Question',
    'Your Answer(s)',
    'Correct Answer(s)',
    'Result',
    'Time Spent (seconds)',
    'Explanation'
  ];

  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];

  const rows = items.map((item, index) => {
    const userAnswers = answers[index] || [];
    const isCorrect = 
      userAnswers.length === item.correctAnswers.length &&
      item.correctAnswers.every(ans => userAnswers.includes(ans));
    
    const userAnsText = userAnswers
      .map(ansIdx => `${alphabet[ansIdx] || ansIdx}: ${item.options[ansIdx] || ''}`)
      .join(' | ');

    const correctAnsText = item.correctAnswers
      .map(ansIdx => `${alphabet[ansIdx] || ansIdx}: ${item.options[ansIdx] || ''}`)
      .join(' | ');

    const escapeCsv = (text) => `"${String(text || '').replace(/"/g, '""')}"`;

    return [
      index + 1,
      escapeCsv(item.domain),
      escapeCsv(item.question),
      escapeCsv(userAnsText),
      escapeCsv(correctAnsText),
      isCorrect ? 'Correct' : 'Incorrect',
      timeSpentPerQuestion[index] || 0,
      escapeCsv(item.explanation)
    ].join(',');
  });

  const csvContent = [headers.join(','), ...rows].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${exam.code}_Exam_Results_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
