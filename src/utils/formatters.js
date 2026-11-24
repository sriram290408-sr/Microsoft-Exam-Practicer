/**
 * Format seconds into mm:ss or hh:mm:ss
 */
export function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Calculate integer percentage
 */
export function calculatePercentage(part, total) {
  if (!total || total <= 0) return 0;
  return Math.round((part / total) * 100);
}

/**
 * Fisher-Yates array shuffle (creates a new array copy)
 */
export function shuffleArray(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Prepare randomized questions for an exam session
 * Shuffles question order and option order while tracking the original correct answer indices
 */
export function prepareExamQuestions(questionBank) {
  const shuffledQuestions = shuffleArray(questionBank);
  return shuffledQuestions.map((q, idx) => {
    // Map options with their original index
    const mappedOptions = q.o.map((text, origIdx) => ({
      text,
      origIdx,
      isCorrect: q.a.includes(origIdx)
    }));
    
    // Shuffle options
    const shuffledOptions = shuffleArray(mappedOptions);
    
    // Find new correct indices
    const correctIndices = [];
    shuffledOptions.forEach((opt, newIdx) => {
      if (opt.isCorrect) {
        correctIndices.push(newIdx);
      }
    });

    return {
      id: `q_${idx}_${Date.now()}`,
      originalIndex: idx,
      domain: q.d,
      question: q.q,
      code: q.c || null,
      options: shuffledOptions.map(opt => opt.text),
      correctAnswers: correctIndices,
      explanation: q.e,
      multi: q.multi || false
    };
  });
}
