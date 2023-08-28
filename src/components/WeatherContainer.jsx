import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import Preloader from "./Preloader/Preloader.jsx";
let apiKey = "aea320f01a6d10dfac6d72a7b68a42f0";
const WeatherContainer = () => {
  const [town, setTown] = useState({ town: "Екатеринбург" });
  const [data, setData] = useState({});

  // console.log(town)
  //{Math.trunc(data.main.temp)}°C температура
  //data.list[0].description описание
  //`owf-${data.weather[0].id}` иконка погоды(нужен фонтавесоме для отображения)
  //TODO: Получить данные на каждые три часа 5 раз, и отрисовать в 5 отдельных компонентах(для каждой компоненты свои данные , для определенного времени)
  //TODO: Вынести получение данных в контейнерную компоненту, и затем создать 5 одинаковых компонент под каждые 3 часа, и затем из контейнерной прокидывать ниже
  //TODO: Это пример одной из такой компонент, таких будет 5, все лежат в контейнерной, стилизуем в конце
  // TODO: Нужно подумать что делать с инпутом, куда его положить чтоб все ок было
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${town.town}&cnt=5&lang=ru&appid=${apiKey}&units=metric`
      )
      .then((response) => {
        setData(response.data);
      });
  }, []);
  if (!data.list) {
    return <Preloader />;
  } 
  
  console.log(town.town);
  console.log(data);
  return (
    <div>
      <input
        onChange={(e) => setTown({ town: e.target.value })}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            axios
              .get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${town.town}&cnt=5&lang=ru&appid=${apiKey}&units=metric`
              )
              .then((response) => {
                setData(response.data);
              });
            console.log(data.city.name);

          }
        }}
        type="text"
        className="city"
        value={town.town}
      />
      <Weather data={data.list[0]} town={data.city.name}/>
      <Weather data={data.list[1]} />
      <Weather data={data.list[2]} />
      <Weather data={data.list[3]} />
      <Weather data={data.list[4]} />
    </div>
  );
};

export default WeatherContainer;

// {
//   temperature: `${Math.trunc(response.data.list[0].main.temp)}°C`,
//   weatherDescription: response.data.list[0].weather[0].description,
//   wind: response.data.list[0].wind.speed,
//   humidity: response.data.list[0].main.humidity,
//   id: response.data.list[0].weather[0].id,
// }

// setData({
//   temperature: `${Math.trunc(response.data.list[0].main.temp)}°C`,
//   weatherDescription: response.data.list[0].weather[0].description,
//   wind: response.data.list[0].wind.speed,
//   humidity: response.data.list[0].main.humidity,
//   id: response.data.list[0].weather[0].id,
//   date:response.data.list[0].dt_txt
// })

// {
//   temperature: null,
//   weatherDescription: null,
//   wind: null,
//   humidity: null,
//   id: null,
//   date:null
// }
