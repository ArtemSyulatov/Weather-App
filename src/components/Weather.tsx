import React from "react";
import classes from './Weather.module.css'
import {getIcon} from "../utils/setBackground.ts";
const Weather = (props) => {


  return (
    <div className={classes.weather}>
    <p>{props.data.dt_txt}</p> 
    <img src={getIcon(props.data.weather[0].icon)}></img>
    <div className={classes.descriptionContainer}>
      <span className="temperature"> Температура: {Math.trunc(props.data.main.temp)}°C{ }</span>
      <span className={classes.weatherDescription}>
       {props.data.weather[0].description[0].toUpperCase() + props.data.weather[0].description.slice(1)}
      </span>
    </div>
    <div className="wind"> 
      Ветер: {Math.trunc(props.data.wind.speed) + ' м/c'}
    </div>
    <div className="humidity">Влажность: {props.data.main.humidity} % </div>
  </div>
  );
};

export default Weather;
// `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`