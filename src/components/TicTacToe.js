import React, { useState } from 'react';
import '../styles/TicTacToe.css';

const TicTacToe = () => {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [showReplay, setShowReplay] = useState(false);

  const handleClick = (index) => {
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);

    if (calculateWinner(newBoard)) {
      setWinner(player);
      setShowReplay(true);
    } else {
      setPlayer(player === 'X' ? 'O' : 'X');
    }
  };

  const handleReplay = () => {
    setBoard(initialBoard);
    setPlayer("X");
    setWinner(null);
    setShowReplay(false);
  };

  const calculateWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }

    return false;
  };

  const renderCell = (index) => {
    return (
      <div className="cell" onClick={() => handleClick(index)}>
        {board[index]}
      </div>
    );
  };

  return (
    <div className="tic-tac-toe">
      <h1>Tic-Tac-Toe</h1>
      <div className="board">
        {board.map((_, index) => renderCell(index))}
      </div>
      {showReplay && (
        <>
          <p className="winner-message">{winner === "Draw" ? "It's a draw!" : `Player ${winner} wins!`}</p>
          <button className="replay-button" onClick={handleReplay}>Replay</button>
        </>
      )}
    </div>
  );
};

export default TicTacToe;
