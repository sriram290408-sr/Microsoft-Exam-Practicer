import { useState, useEffect } from 'react';
import { STORAGE_KEYS } from '../data/constants.js';
import { storage } from '../utils/storage.js';

const FONT_SIZES = ['100%', '115%', '130%'];

export function useThemePreferences() {
  const saved = storage.get(STORAGE_KEYS.PREFERENCES);

  const [fontSizeIndex, setFontSizeIndex] = useState(() => {
    return typeof saved?.sizeIdx === 'number' && saved.sizeIdx >= 0 && saved.sizeIdx < FONT_SIZES.length
      ? saved.sizeIdx
      : 0;
  });

  useEffect(() => {
    // Default and standard theme is tuned matte dark
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body.classList.add('dark');
    document.body.classList.remove('light');
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
