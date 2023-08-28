import React from "react";
import classes from './Weather.module.css' 
const Weather = (props) => { 
  console.log(props)

  return (
    <div className={classes.weather}>
   <div>{props.town}</div>
    <p>{}</p> 
    <i className="weather-icon owf">
      Тут будет иконка из fontawesome {}
    </i>
    <div className="weather-error"></div>
    <div className={classes.descriptionContainer}>
      <span className="temperature"> Температура {} { }</span>
      <span className="weather-description">
        Сейчас {''}{}
      </span>
    </div>
    <div className="wind"> 
      { + ' Метров в секунду'}
    </div>
    <div className="humidity">{} Влажность</div>
  </div>
  );
};

export default Weather;
