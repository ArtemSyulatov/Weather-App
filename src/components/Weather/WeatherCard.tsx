import React from "react";
import classes from './Weather.module.css'
import {getIcon} from "../../utils/getIcon.ts";
import {IMain, IWind} from "../../types/types";

interface WeatherCardProps {
    data: {
        weather: Array<{description:string,icon:string}>
        main: IMain
        wind: IWind
        dt_txt: string
    }
}

const WeatherCard = ({data}: WeatherCardProps) => {
    console.log(data.weather[0])
    return (
        <div className={classes.weather}>
            <p>{data.dt_txt}</p>
            <img src={getIcon(data.weather[0].icon)} alt={''}></img>
            <div className={classes.descriptionContainer}>
                <span className="temperature"> Температура: {Math.trunc(data.main.temp)}°C{}</span>
                <span className={classes.weatherDescription}>
       {data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1)}
      </span>
            </div>
            <div className="wind">
                Ветер: {Math.trunc(data.wind.speed) + ' м/c'}
            </div>
            <div className="humidity">Влажность: {data.main.humidity} %</div>
        </div>
    );
};

export default WeatherCard;
