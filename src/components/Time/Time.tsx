import { useEffect, useState } from "react";
import { getCurrentDate, showTime } from "../../utils/getDate";
import classes from "./Time.module.css";
const Time = () => {
  const [time, setTime] = useState(showTime());
  useEffect(() => {
    setInterval(() => {
      setTime(showTime());
    },1000);
  }, []);
  return (
    <div>
      <div className={classes.time}>{time}</div>
      <div className={classes.date}>{getCurrentDate()}</div>
    </div>
  );
};

export default Time;
