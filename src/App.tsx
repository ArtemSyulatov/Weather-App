import React, {useRef} from "react";
import "./styles/App.css";
import WeatherContainer from "./components/WeatherContainer";


function App() {
    const imgBg = useRef();
    const setBackground = (weather) => {
        imgBg.current.style.backgroundImage = `url(./${weather}.png)`
    };
    return (
        <div className="bg" ref={imgBg}>
            <WeatherContainer setBg={setBackground}/>
        </div>
    );
}

export default App; 