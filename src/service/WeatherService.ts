import {apiKey, PAGE_SIZE} from "../constants/conststants";
import axios, {AxiosResponse} from "axios";
import {Dispatch, SetStateAction} from "react";

interface Props {
    setBg: (string: string) => void
}

export async function getWeather(setData: Dispatch<SetStateAction<{ list: never[]; city: { name: string; }; }>>, props: Props, setTown: Dispatch<SetStateAction<{ town: string; error: string; }>>, town: string) {
    await axios
        .get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${town}&cnt=${PAGE_SIZE}&lang=ru&appid=${apiKey}&units=metric`
        )
        .then((response: AxiosResponse) => {
            setData(response.data);
            props.setBg(response.data.list[0].weather[0].main)
        })
        .catch(() => {
            setTown({town, error: "The city is incorrectly specified"});
            setTimeout(() => {
                setTown({town, error: ""});
            }, 3000);
        });
}