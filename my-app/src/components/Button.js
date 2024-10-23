import React, { memo } from 'react';

export const ResetButton = memo(function ResetButton({ onReset }) {
  return (
      <button className="reset-btn" onClick={onReset}>
          Очистити результати
      </button>
  );
});