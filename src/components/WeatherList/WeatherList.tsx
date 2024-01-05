import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import WeatherCard from "../Weather/WeatherCard";
import Preloader from "../Preloader/Preloader.tsx";
import classes from "./WeatherList.module.css";
import { getWeather } from "../../service/WeatherService.ts";
import Time from "../Time/Time.tsx";

interface WeatherContainerProps {
  setBg: (string: string) => void;
}

const WeatherList = (props: WeatherContainerProps) => {
  const [town, setTown] = useState({ town: "Ekaterinburg", error: "" });
  const [data, setData] = useState({
    list: [],
    city: { name: "" },
  });
  useEffect(() => {
    getWeather(setData, props, setTown, town.town).then((r) => r);
  }, []);

  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setTown({
        error: "",
        town: e.target.value,
      }),
    []
  );
  const onInputKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.code === "Enter") {
        console.log(data.city.name);
        getWeather(setData, props, setTown, town.town).then((r) => r);
      }
    },
    [props, town]
  );
  if (!data.list) {
    return <Preloader />;
  }
  return (
    <div>
      <p className={classes.foreCast}>Forecast 24 hours</p>
      <input
        onChange={onInputChange}
        onKeyDown={onInputKeyDown}
        type="text"
        className={classes.input}
        value={town.town}
      />
      <div className={classes.town}>
        {town.error ? town.error : data.city.name}
      </div>
      <Time />
      <div className={classes.main}>
        {data.list.map((element, index) => {
          return <WeatherCard key={index} data={element} />;
        })}
      </div>
    </div>
  );
};
export default WeatherList;
