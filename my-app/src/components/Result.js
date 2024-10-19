export function Results({ votes, emojis }) {
  const maxVotes = Math.max(...votes);
  const winnerIndex = votes.indexOf(maxVotes);

  return (
    <div className="results">
      <h2>Переможець:</h2>
      <div className="winner-emoji">{emojis[winnerIndex]}</div>
      <p>Кількість голосів: {maxVotes}</p>
    </div>
  );
}
