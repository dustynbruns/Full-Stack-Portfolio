import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import "../styles/WeatherScreen.css";

const WeatherScreen = () => {
  const API_KEY = "6c0d6ff2fac9a299b86251d8df8c22e7";
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [error, setError] = useState(null);

  const getWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`
      );
      const data = await response.json();

      if (response.ok) {
        const { coord } = data;
        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}&units=imperial`
        );
        const forecastData = await forecastResponse.json();

        setWeatherInfo({
          name: data.name,
          temp: data.main.temp,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          humidity: data.main.humidity, // Additional weather data
          windSpeed: data.wind.speed,    // Additional weather data
        });
        setDailyForecast(forecastData.daily);
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather();
  };

  return (
    <div className="weather-screen">
      <div className="weather-container">
        <h1>Enter your city below!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="search-input"
          />
          <button className="submit-button" type="submit">Search</button>
        </form>
        {error && <p className="error">{error}</p>}
        {weatherInfo && (
          <div className="weather-info">
            <h2>
              {weatherInfo.name}: {Math.round(weatherInfo.temp)}°F
            </h2>
            <img
              src={`http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`}
              alt={weatherInfo.description}
            />
            <h3>{weatherInfo.description}</h3>
            <p>Humidity: {weatherInfo.humidity}%</p>
            <p>Wind Speed: {weatherInfo.windSpeed} mph</p>
          </div>
        )}
        <div className="weather-forecast">
          {dailyForecast.map((day, index) => (
            <div key={index} className="weather-daily">
              <h4>{new Date(day.dt * 1000).toLocaleDateString()}</h4>
              <img
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
              />
              <h4>{Math.round(day.temp.day)}°F</h4>
              <h4>{day.weather[0].description}</h4>
            </div>
          ))}
        </div>
      </div>
      <ParticlesBg className="particles-bg" type="lines" num={100} bg={true} />
    </div>
  );
};

export default WeatherScreen;