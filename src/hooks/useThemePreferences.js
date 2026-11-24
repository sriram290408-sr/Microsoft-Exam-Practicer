import { useState, useEffect } from 'react';
import { STORAGE_KEYS } from '../data/constants.js';
import { storage } from '../utils/storage.js';

const FONT_SIZES = ['100%', '115%', '130%'];

export function useThemePreferences() {
  const [fontSizeIndex, setFontSizeIndex] = useState(() => {
    const saved = storage.get(STORAGE_KEYS.PREFERENCES);
    return typeof saved?.sizeIdx === 'number' && saved.sizeIdx >= 0 && saved.sizeIdx < FONT_SIZES.length
      ? saved.sizeIdx
      : 0;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body.classList.add('dark');
    document.body.style.fontSize = FONT_SIZES[fontSizeIndex];

    storage.set(STORAGE_KEYS.PREFERENCES, {
      dark: true,
      sizeIdx: fontSizeIndex
    });
  }, [fontSizeIndex]);

  const cycleFontSize = () => {
    setFontSizeIndex(prev => (prev + 1) % FONT_SIZES.length);
  };

  return {
    fontSize: FONT_SIZES[fontSizeIndex],
    cycleFontSize
  };
}
