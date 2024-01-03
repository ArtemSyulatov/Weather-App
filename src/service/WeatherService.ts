import {apiKey, PAGE_SIZE} from "../constants/conststants";
import axios, {AxiosResponse} from "axios";

export async function getWeather(setData, props, setTown, town: string) {
    await axios
        .get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${town}&cnt=${PAGE_SIZE}&lang=ru&appid=${apiKey}&units=metric`
        )
        .then((response: AxiosResponse) => {
            void setData(response.data);
            void props.setBg(response.data.list[0].weather[0].main)
        })
        .catch(() => {
            void setTown({...town, error: "The city is incorrectly specified"});
            setTimeout(() => {
                setTown({...town, error: ""});
            }, 3000);
        });
}