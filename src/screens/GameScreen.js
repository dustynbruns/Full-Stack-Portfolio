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
                <div className="game-tile" onClick={() => openGame(<TicTacToe />)}>
                    <h3>Tic Tac Toe</h3>
                </div>
                <div className="game-tile" onClick={() => openGame(<Minesweeper />)}>
                    <h3>Minesweeper</h3>
                </div>
                <div className="game-tile" onClick={() => openGame(<Breakout />)}>
                    <h3>Breakout</h3>
                </div>   
                <div className="game-tile" onClick={() => openGame(<HigherOrLower />)}>
                    <h3>Higher or Lower</h3>
                </div>
            </div>
            {renderOverlay()}
            <ParticlesBg
                className="particles-bg"
                type="polygon"
                num={10}
                color="#34495e"
                lineLinked={{
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1,
                }}
                move={{
                    enable: true,
                    speed: 3,
                    direction: "none",
                    random: false,
                    straight: false,
                    outMode: "out",
                    bounce: false,
                    attract: { enable: false, rotateX: 600, rotateY: 1200 },
                }}
                polygon={{
                    nb_sides: 5,
                }}
                opacity={{
                    value: 0.5,
                    random: false,
                    anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
                }}
                size={{
                    value: 3,
                    random: true,
                    anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
                }}
                bg={true}
            />

        </div>
    );
};

export default GameScreen;
