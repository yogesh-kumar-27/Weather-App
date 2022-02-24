import React, { useState } from "react";
import "./weather.css";
import { fetchweather } from "./FetchWeather";

const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = async (event) => {
    if (event.key === "Enter") {
      const data = await fetchweather(query);

      setWeather(data);
      setQuery("");
    }
  };

  return (
    <section className="card">
      <div className="card-body">
       <div className="content">
       <input
          type="text"
          className="search"
          placeholder="Enter the city name in here"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyPress={search}
        />

       </div>
        {weather.main && (
          <div className="box">
            <h3 className="heading">{new Date().toDateString("en-US")}</h3>

            <h2 className="city-name">
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </h2>
            <div className="city-temp">
              {Math.round(weather.main.temp)}
              <sup>&deg;C</sup>
            </div>
            <div className="info">
              <img
                className="city-icon"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
              <p>{weather.weather[0].description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Weather;
