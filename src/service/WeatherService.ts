import {apiKey, PAGE_SIZE} from "../constants/conststants";
import axios, {AxiosResponse} from "axios";

// interface WeatherData{
//
// }

export async function getWeather(setData,props,setTown,{town}){
    await axios
        .get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${town}&cnt=${PAGE_SIZE}&lang=ru&appid=${apiKey}&units=metric`
        )
        .then((response:AxiosResponse) => {
            setData(response.data);
            console.log(response.data)
            props.setBg(response.data.list[0].weather[0].main)
        })
        .catch(() => {
            setTown({...town, error: "The city is incorrectly specified"});
            setTimeout(() => {
                setTown({...town, error: ""});
            }, 3000);
        });
}