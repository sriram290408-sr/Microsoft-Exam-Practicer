import React from 'react';
import { CatCompanion } from './CatCompanion.jsx';

export function CatStation({ mood, message, isBubbleVisible, onPet, layout = 'station' }) {
  if (layout === 'inline') {
    return (
      <div className="cat-dock-start">
        <CatCompanion
          mood={mood}
          message={message}
          isBubbleVisible={isBubbleVisible}
          onPet={onPet}
        />
      </div>
    );
  }

  return (
    <div id="catDockRight" className="cat-dock-right">
      <div className="cat-station-header">
        <span className="cat-badge-dot"></span>Study Buddy
      </div>
      <CatCompanion
        mood={mood}
        message={message}
        isBubbleVisible={isBubbleVisible}
        onPet={onPet}
      />
      <div className="cat-perch-mat"></div>
      <small className="cat-hint">Click me for tips!</small>
    </div>
  );
}
