export function EmojiList({ emojis, votes, onVote }) {
  return (
    <div className="emoji-container">
      {emojis.map((emoji, index) => (
        <div key={index} className="emoji-item" onClick={() => onVote(index)}>
          <span className="emoji">{emoji}</span>
          <span className="vote-count">{votes[index]}</span>
        </div>
      ))}
    </div>
  );
}
