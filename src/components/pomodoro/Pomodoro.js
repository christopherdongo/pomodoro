import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Img from "../styled/imagen/img";
import Button from "../styled/Button/Button";
import NotificationDiv from '../styled/Notification/Notification'
//media query

import {device} from '../styled/device/device'


const Contendorbutton = styled.div`
  display: flex;
  margin:0px;
  justify-content: center;
  div {
    padding: 10px;
  }
`;
const Timer = styled.div`
  text-align: center;
  font-family: 'Sansita Swashed', cursive;
  font-size: 5em;
  font-weight: 800;
  padding-top: 10px;
  padding-bottom: 10px;


`;

const Containerimg = styled.figure`
  width: 60%;
  height: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  border-block-color: blue;
`;

const Pomodoro = () => {
  //estados iniciales
  // eslint-disable-next-line
  const [times, setTimes] = useState({
    defaultTime: 1500,
    shortBreak: 300,
    longBreak: 900,
  });

  const [timer, setTimer] = useState({
    time: 0,
  });

  const [alerta, setAlerta] = useState({
    message: "",
    type: "",
  });

  const [running, setRunning] = useState(false)
  const [pause, setPause] = useState(false)
  //actualizar los cambios
  useEffect(() => {
    if(running){
    if (timer.time) {
      const interval = setInterval(() => {
        countDown();
      }, 1000);
      return () => clearInterval(interval);
    }
    }
    // eslint-disable-next-line
  }, [running,timer.time]);

  //obtener el nuevo valor
  const setTime = (newTime) => {
    setTimer({
      time: newTime,
    });
  };
  const countDown = () => {
    if (timer.time === 0) {
      setAlerta({
        message: "Buzzzzz",
        type: "buz",
      });
    } else {
      setTimer({
        time: timer.time - 1,
      });
    }
  };

  const startTimer = () => {
    setAlerta({
      message: "Working!!",
      type: "work",
    });
    setRunning(true)
    return setTime(times.defaultTime);
  };

  const setTimeForShortBreak = () => {
    setAlerta({
      type: "shortBreak",
      message: "Taking a short Break",
    });
    setRunning(true)
    return setTime(times.shortBreak);
    
  };

  const setTimeForLongBreak = () => {
    setAlerta({
      type: "longBreak",
      message: "Taking a long Break!",
    });
    setRunning(true)
    return setTime(times.longBreak);
    
  };

  const setStop=()=>{
     if(running){
       setRunning(false)
       setPause(true)
     }
     else{
       setRunning(true)
       setPause(false)
     }
  }

  //visualizar los datos convertidos
  const displayTimer = (seconds) => {
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor((seconds % 3600) % 60);

    return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  };

  //destructuring
  const { message, type } = alerta;

  return (
    <>
      <div>
        {message ? (
          <NotificationDiv type={type} running={running}>
            <h1>{running? message : 'Pause'}</h1>
          </NotificationDiv>
        ) : (
          ""
        )}
        <div>
          <Timer>{displayTimer(timer.time)}</Timer>
        </div>
        <Contendorbutton>
          <div className="types" onClick={setTimeForShortBreak}>
            <Button className="short" disabled={pause? 'disabled':''} >Short Break</Button>
          </div>

          <div className="types">
            <Button className="start" onClick={startTimer} disabled={pause? 'disabled':''}>
              Start
            </Button>
          </div>

          <div className="types">
            <Button className="long" onClick={setTimeForLongBreak} disabled={pause? 'disabled':''}>
              Long Break
            </Button>
          </div>

     
           <div className="types">
           <Button className="stop" onClick={setStop}>
             { !pause? 'Pause' : (pause? 'Continued' : '')  }
           </Button>
         </div> 
         
        </Contendorbutton>

        <Containerimg>
          <Img />
        </Containerimg>
      </div>
    </>
  );
};

export default Pomodoro;
