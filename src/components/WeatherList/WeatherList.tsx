import React, {ChangeEvent, FC, useCallback, useEffect, useState} from "react";
import WeatherCard from "../Weather/WeatherCard";
import Preloader from "../Preloader/Preloader.tsx";
import classes from './WeatherList.module.css'
import {getWeather} from "../../service/WeatherService.ts";

interface WeatherContainerProps {
    setBg: (string: string) => void;
}

const WeatherList = (props: WeatherContainerProps) => {
    const [town, setTown] = useState({town: "Екатеринбург", error: ""});
    const [data, setData] = useState({
        list: [],
        city: {name: ''},
    });
    useEffect(() => {
        getWeather(setData, props, setTown, town.town).then(r => r)
    }, []);
    console.log(data.city)
    const onInputChange = useCallback((e:ChangeEvent<HTMLInputElement>) => setTown({error: "", town: e.target.value}), [])
    const onInputKeyDown = useCallback((e:React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter") {
            getWeather(setData, props, setTown, town.town).then(r => r);
        }
    }, [props, town])
    if (!data.list) {
        return <Preloader/>;
    }
    return (
        <div>
            <p className={classes.foreCast}>Прогноз погоды на 24 часа</p>
            <input
                onChange={onInputChange}
                onKeyDown={onInputKeyDown}
                type="text"
                className={classes.input}
                value={town.town}
            />
            <div className={classes.town}>{town.error ? town.error : data.city.name}</div>
            <div className={classes.main}>
                {data.list.map((element, index) => {
                    return <WeatherCard key={index} data={element}/>;
                })}
            </div>
        </div>
    );
};
export default WeatherList;
