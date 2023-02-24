import "./Date.css";
import moment from "moment";
import { useEffect, useState } from 'react';

const Date = () => {    

  const [ now, setNow ] = useState<string>(moment().format('HH:mm:ss'));
  const [today, setToday] = useState<string>(moment().format('DD/MM/YYYY'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setToday(moment().format('DD/MM/YYYY'));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  useEffect(() => {
    const intervalId = setInterval(() => {
        setNow(moment().format('HH:mm:ss'));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="container-horas">
        <h2>{now}</h2>
      </div>
      <div className="container-data">
        <h1>{today}</h1>
      </div>
    </>
  );
};

export default Date;