import React, { useState, useEffect } from 'react';
import '../styles/Minesweeper.css';

const Minesweeper = () => {
    const [board, setBoard] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [gameState] = useState("playing");
    const [lives, setLives] = useState(3);

    const createBoard = () => {
        // Create a simple 8x8 board with 10 mines
        const newBoard = Array(8)
            .fill(null)
            .map(() => Array(8).fill({ value: 0, revealed: false, flagged: false }));

        // Add mines randomly
        let minesPlaced = 0;
        while (minesPlaced < 1) {
            const row = Math.floor(Math.random() * 8);
            const col = Math.floor(Math.random() * 8);

            if (newBoard[row][col].value !== 'M') {
                newBoard[row][col] = { value: 'M', revealed: false, flagged: false };
                minesPlaced++;
            }
        }

        // Calculate numbers for non-mine cells
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                if (newBoard[row][col].value === 'M') continue;

                let mineCount = 0;
                for (let r = -1; r <= 1; r++) {
                    for (let c = -1; c <= 1; c++) {
                        const newRow = row + r;
                        const newCol = col + c;

                        if (
                            newRow >= 0 &&
                            newRow < 8 &&
                            newCol >= 0 &&
                            newCol < 8 &&
                            newBoard[newRow][newCol].value === 'M'
                        ) {
                            mineCount++;
                        }
                    }
                }
                newBoard[row][col] = { value: mineCount, revealed: false, flagged: false };
            }
        }

        setBoard(newBoard);
    };

    const handleClick = (row, col) => {
        if (gameOver) return;

        if (board[row][col].value === 'M') {
            if (lives > 1) {
                setLives(lives - 1);
                const newBoard = [...board];
                newBoard[row][col].revealed = true;
                setBoard(newBoard);
            } else {
                setGameOver(true);
                alert('Game Over!');
            }
        } else {
            reveal(row, col);
        }
    };

    function handleFlag(e, row, col) {
        e.preventDefault();

        setBoard((prevBoard) => {
            const newBoard = prevBoard.map((r, rowIndex) =>
                r.map((cell, cellIndex) => {
                    if (rowIndex === row && cellIndex === col) {
                        return { ...cell, flagged: !cell.flagged };
                    } else {
                        return cell;
                    }
                })
            );
            return newBoard;
        });
    }

    const reveal = (row, col) => {
        if (board[row][col].revealed) return;

        const newBoard = [...board];
        newBoard[row][col].revealed = true;
        setBoard(newBoard);

        if (newBoard[row][col].value === 0) {
            for (let r = -1; r <= 1; r++) {
                for (let c = -1; c <= 1; c++) {
                    const newRow = row + r;
                    const newCol = col + c;

                    if (
                        newRow >= 0 &&
                        newRow < 8 &&
                        newCol >= 0 &&
                        newCol < 8 &&
                        !newBoard[newRow][newCol].revealed
                    ) {
                        reveal(newRow, newCol);
                    }
                }
            }
        }
    };

    useEffect(() => {
        createBoard();
    }, []);

    return (
        <div className="minesweeper">
            <h2>Minesweeper</h2>
            {gameState === 'new' && (
                <button onClick={createBoard}>Start New Game</button>
            )}
            <div className="board">
                {board.map((row, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {row.map((cell, colIndex) => (
                            <div
                                key={colIndex}
                                className={`cell ${cell.revealed ? 'revealed' : ''
                                    } ${cell.value === 'M' && cell.revealed ? 'mine' : ''
                                    }`}
                                onClick={() => handleClick(rowIndex, colIndex)}
                                onContextMenu={(e) => handleFlag(e, rowIndex, colIndex)}
                            >
                                {cell.revealed && cell.value === 'M' ? (
                                    <div className="mine-circle"></div>
                                ) : (
                                    cell.revealed && cell.value > 0 && cell.value
                                )}
                                {cell.flagged && !cell.revealed ? '🚩' : ''}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="lives">
                {Array(lives)
                    .fill('❤️')
                    .map((heart, index) => (
                        <span key={index}>{heart}</span>
                    ))}
            </div>
            {gameState === 'won' && <h3 className="winner-message">You won!</h3>}
            {gameState === 'lost' && <h3 className="loser-message">You lost!</h3>}
        </div>
    );
};

export default Minesweeper;