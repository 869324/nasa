import React, { useState, useEffect } from "react";
import axios from "axios";

const MarsWeather = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://api.nasa.gov/insight_weather/?api_key=YOUR_API_KEY&feedtype=json&ver=1.0"
      );
      setWeather(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Weather on Mars</h2>
      <p>Temperature: {weather.temperature} F</p>
      <p>Wind Speed: {weather.wind_speed} mph</p>
      <p>Pressure: {weather.pressure} Pa</p>
    </div>
  );
};

export default MarsWeather;
