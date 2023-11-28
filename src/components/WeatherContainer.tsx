import {useEffect, useState} from "react";
import Weather from "./Weather.js";
import Preloader from "./Preloader/Preloader";
import classes from './WeatherContainer.module.css'
import {getWeather} from "../service/WeatherService.ts";




const WeatherContainer = (props) => {
    const [town, setTown] = useState({town: "Екатеринбург", error: ""});
    const [data, setData] = useState({});
    useEffect(() => {
        getWeather(setData,props,setTown,town)
    }, []);
    if (!data.list) {
        return <Preloader/>;
    }
    return (
        <div>
            <p className={classes.prognoz}>Прогноз погоды на 24 часа</p>
            <input
                onChange={(e) => setTown({town: e.target.value})}
                onKeyDown={(e) => {
                    if (e.code === "Enter") {
                        getWeather(setData,props,setTown,town)
                    }
                }}
                type="text"
                className={classes.input}
                value={town.town}
            />
            <div className={classes.town}>{town.error ? town.error : data.city.name}</div>
            <div className={classes.main}>
                {data.list.map((element, index) => {
                    return <Weather key={index} data={element}/>;
                })}
            </div>
        </div>
    );
};
export default WeatherContainer;
