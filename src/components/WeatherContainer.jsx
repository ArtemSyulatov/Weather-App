import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import Preloader from "./Preloader/Preloader.jsx";
import classes from './WeatherContainer.module.css' 
let apiKey = "aea320f01a6d10dfac6d72a7b68a42f0";
const PAGE_SIZE = 8;
const WeatherContainer = (props) => {
  const [town, setTown] = useState({ town: "Екатеринбург", error: "" });
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${town.town}&cnt=8&lang=ru&appid=${apiKey}&units=metric`
      )
      .then((response) => {
        setData(response.data);
        props.setBg(response.data.list[0].weather[0].main) 
      });
  }, []);
  if (!data.list) {
    return <Preloader />;
  }
  return (
    <div >
      <p className={classes.prognoz}>Прогноз погоды на 24 часа</p>
      <input
        onChange={(e) => setTown({ town: e.target.value })}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            axios
              .get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${town.town}&cnt=${PAGE_SIZE}&lang=ru&appid=${apiKey}&units=metric`
              )
              .then((response) => {
                setData(response.data);
                setTown({ town: "" });
                props.setBg(response.data.list[0].weather[0].main) 
              })
              .catch(() => {
                setTown({ ...town, error: "Неправильно указан город!" });
                setTimeout(() => {
                  setTown({ ...town, error: "" });
                }, 1000);
              });
          }
        }}
        type="text"
        className={classes.input}
        value={town.town}
      />
      <div className={classes.town}>{town.error ? town.error : data.city.name}</div>
      <div className={classes.main}>
      {data.list.map((element,index) => { 
        return <Weather key = {index} data={element} />;
      })}
      </div>
    </div>
  );
};
export default WeatherContainer;
