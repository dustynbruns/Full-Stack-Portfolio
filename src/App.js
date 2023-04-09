import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import CalculatorScreen from './screens/CalculatorScreen';
import WeatherScreen from './screens/WeatherScreen';
import GameScreen from './screens/GameScreen';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/calculator" element={<CalculatorScreen />} />
          <Route path="/weather" element={<WeatherScreen />} />
          <Route path="/game" element={<GameScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;