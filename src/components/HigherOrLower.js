import React, { useState } from 'react';
import '../styles/HigherOrLower.css';

const HigherOrLower = () => {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [winner, setWinner] = useState(false);

  const checkGuess = () => {
    const guessedNumber = parseInt(guess, 10);
    if (guessedNumber === number) {
      setWinner(true);
      setMessage('Congratulations! You guessed the number!');
    } else if (guessedNumber < number) {
      setMessage('Higher!');
    } else {
      setMessage('Lower!');
    }
  };

  const handleInputChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkGuess();
  };

  const resetGame = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('');
    setWinner(false);
  };

  return (
    <div className="higher-or-lower">
      <h2>Higher or Lower</h2>
      {!winner ? (
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            min="1"
            max="100"
            value={guess}
            onChange={handleInputChange}
            placeholder="Enter your guess"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <button onClick={resetGame}>Play Again</button>
      )}
      <p>{message}</p>
    </div>
  );
};

export default HigherOrLower;
