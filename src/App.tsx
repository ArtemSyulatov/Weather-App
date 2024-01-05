import React, {RefObject, useRef} from "react";
import "./styles/App.css";
import WeatherList from "./components/WeatherList/WeatherList"; 
function App() {
    const imgBg = useRef() as RefObject<HTMLDivElement> | null;
    const setBackground = (weather: string):void => {
        if(imgBg?.current){
            imgBg.current.style.backgroundImage = `url(./${weather}.png)`
        }
    };
    return (
        <div className="bg" ref={imgBg}>
            <WeatherList setBg={setBackground}/>
        </div>
    );
}
export default App;