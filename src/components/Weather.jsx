import React from "react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

let apiKey = "aea320f01a6d10dfac6d72a7b68a42f0";
const Weather = () => {
  const [town, setTown] = useState({ town: "Екатеринбург" });
  const [data, setData] = useState({
    temperature: null,
    weatherDescription: null,
    wind: null,
    humidity: null,
    id:null
  });
  // console.log(town)
  //{Math.trunc(data.main.temp)}°C температура
  //data.list[0].description описание
  //`owf-${data.weather[0].id}` иконка погоды(нужен фонтавесоме для отображения)
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${town.town}&cnt=5&lang=ru&appid=${apiKey}&units=metric`
      )
      .then((response) => {
        // console.log(response.data.list[0].weather[0].description);
        // console.log(response.data.list[0]);
        console.log(response.data.list[0]);
        setData({
          temperature: `${Math.trunc(response.data.list[0].main.temp)}°C`,
          weatherDescription: response.data.list[0].weather[0].description,
          wind: response.data.list[0].wind.speed,
          humidity: response.data.list[0].main.humidity,
          id:response.data.list[0].weather[0].id
        });
      });
  },[]);
  console.log(data);
  return (
    <div className="weather">
      <input
        onChange={(e) => setTown({ town: e.target.value })}
        type="text"
        className="city"
        placeholder="Enter your city"
        value={town.town}
      />
      <i className="weather-icon owf">{`owf-${data.id}`}</i>
      <div className="weather-error"></div>
      <div className="description-container">
        <span className="temperature"></span>
        <span className="weather-description"></span>
      </div>
      <div className="wind"></div>
      <div className="humidity"></div>
    </div>
  );
};

export default Weather;
