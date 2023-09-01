import { useRef } from "react";
import "./App.css";
import WeatherContainer from "./components/WeatherContainer.jsx"; 

function App() {
  const appJs = useRef();
  const setBackground = (weather) => { 
    appJs.current.style.backgroundImage = `url(./src/assets/${weather}.png)`
  }; 
  return (
    <div className="bg" ref={appJs}>
      <WeatherContainer setBg = {setBackground}/>
    </div>
  );
}

export default App; 