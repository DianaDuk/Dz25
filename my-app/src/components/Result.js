import React, { memo, useMemo } from 'react';

export const Results = memo(function Results({ votes, emojis }) {
  const maxVotes = useMemo(() => Math.max(...votes), [votes]);
  const winnerIndex = useMemo(() => votes.indexOf(maxVotes), [votes, maxVotes]);

  return (
      <div className="results">
          <h2>Переможець:</h2>
          <div className="winner-emoji">{emojis[winnerIndex]}</div>
          <p>Кількість голосів: {maxVotes}</p>
      </div>
  );
});
