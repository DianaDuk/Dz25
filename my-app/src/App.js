import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {EmojiList} from './components/EmojiList';
import {Results} from './components/Result';
import {ResetButton} from './components/Button'; 
import './components.css';

function App() {
  const [emojis] = useState(['😊', '😁', '😎', '😍', '😆']);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem('emojiVotes')) || [0, 0, 0, 0, 0];
    setVotes(savedVotes);
  }, []);

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index]++;
    setVotes(newVotes);
    localStorage.setItem('emojiVotes', JSON.stringify(newVotes));
  };

  const handleReset = () => {
    setVotes([0, 0, 0, 0, 0]);
    localStorage.removeItem('emojiVotes');
  };

  return (
    <div className="App">
      <h1>Голосування за найкращий смайлик</h1>
      <EmojiList emojis={emojis} votes={votes} onVote={handleVote} />
      <button className="results-btn" onClick={() => alert('Переможець: ' + emojis[votes.indexOf(Math.max(...votes))])}>
        Показати результати
      </button>
      <Results votes={votes} emojis={emojis} />
      <ResetButton onReset={handleReset} />
    </div>
  );
}

export default App;
