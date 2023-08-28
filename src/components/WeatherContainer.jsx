import React, { useRef } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import Preloader from "./Preloader/Preloader.jsx";
let apiKey = "aea320f01a6d10dfac6d72a7b68a42f0";
const WeatherContainer = () => {
  const [town, setTown] = useState({ town: "Екатеринбург" });
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${town.town}&cnt=8&lang=ru&appid=${apiKey}&units=metric`
      )
      .then((response) => {
        setData(response.data);
      })
  }, []);
  if (!data.list) {
    return <Preloader />;
  } 
  return (
    <div className="">
      <p>Прогноз погоды на 24 часа</p>
      <input
        onChange={(e) => setTown({ town: e.target.value })}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            axios
              .get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${town.town}&cnt=8&lang=ru&appid=${apiKey}&units=metric`
              )
              .then((response) => {
                setData(response.data);
                console.log(response.data);
              })
              .catch((error) => {
                console.log(error);
                alert('Неправильно указан город') 
              });
          }
        }}
        type="text"
        className="city"
        value={town.town}
      />
      <div>{data.city.name}</div> 
      <Weather data={data.list[0]}  />
      <Weather data={data.list[1]} />
      <Weather data={data.list[2]} />
      <Weather data={data.list[3]} />
      <Weather data={data.list[4]} />
      <Weather data={data.list[5]} />
      <Weather data={data.list[6]} />
      <Weather data={data.list[7]} />
    </div>
  );
};
export default WeatherContainer; 