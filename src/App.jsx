import { useRef } from "react";
import "./App.css";
import WeatherContainer from "./components/WeatherContainer.jsx"; 

function App() {
  const imgBg= useRef();
  const setBackground = (weather) => { 
    imgBg.current.style.backgroundImage = `url(./${weather}.png)`
  };
  return (
    <div className="bg" ref={imgBg}>
      <WeatherContainer setBg = {setBackground}/>
    </div>
  );
}

export default App; 