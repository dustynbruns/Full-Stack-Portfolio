import React, { useState } from 'react';
import '../styles/GameScreen.css';
import TicTacToe from '../components/TicTacToe';
import ParticlesBg from 'particles-bg';
import Minesweeper from '../components/Minesweeper';
import Breakout from '../components/Breakout';
import HigherOrLower from '../components/HigherOrLower';

const GameScreen = () => {
    const [selectedGame, setSelectedGame] = useState(null);

    const openGame = (gameComponent) => {
        setSelectedGame(gameComponent);
    };

    const closeGame = () => {
        setSelectedGame(null);
    };

    const renderOverlay = () => {
        if (!selectedGame) return null;

        return (
            <div className="overlay">
                <button className="close-button" onClick={closeGame}>
                    Close
                </button>
                {selectedGame}
            </div>
        );
    };

    return (
        <div className="game-screen">
            <h1>Games</h1>
            <div className="game-grid">
                <div className="game-tile game-title tic-tac-toe" onClick={() => openGame(<TicTacToe />)}>
                    <h3>Tic Tac Toe</h3>
                </div>
                <div className="game-tile game-title minesweeper" onClick={() => openGame(<Minesweeper />)}>
                    <h3>Minesweeper</h3>
                </div>
                <div className="game-tile game-title break-out" onClick={() => openGame(<Breakout />)}>
                    <h3>Breakout</h3>
                </div>
                <div className="game-tile game-title higher-or-lower" onClick={() => openGame(<HigherOrLower />)}>
                    <h3>Higher or Lower</h3>
                </div>
            </div>
            {renderOverlay()}
            <ParticlesBg type="lines" bg={true} num={100} />

        </div>
    );
};

export default GameScreen;
