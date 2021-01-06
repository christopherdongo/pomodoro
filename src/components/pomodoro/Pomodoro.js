import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Img from "../styled/imagen/img";
import Button from "../styled/Button/Button";
import NotificationDiv from "../styled/Notification/Notification";
//media query
import { device } from "../styled/device/device";

const Contendorbutton = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap-reverse;
  gap: 0.5rem;
  div {
    padding: 2rem;
  }
  @media ${device.tablet} {
   width: 90%;
  }
`;
const Timer = styled.div`
  text-align: center;
  font-family: "Sansita Swashed", cursive;
  font-size: 4.2rem;
  font-weight: 800;
`;
const Containerimg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
`;
const ContainerTimer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100px;
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

  const [running, setRunning] = useState(false);
  const [pause, setPause] = useState(false);
  const [active, setActive] = useState(false);
  const [color, setcolor] = useState("")

  //actualizar los cambios
  useEffect(() => {
    if (running) {
      if (timer.time) {
        const interval = setInterval(() => {
          countDown();
        }, 1000);
        return () => clearInterval(interval);
      }
    }
    // eslint-disable-next-line
  }, [running, timer.time]);

  useEffect(() => {
    loading();
    setActive(true);
  // eslint-disable-next-line
  }, []);

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

  //nicio
  const loading = () => {
    return setTime(times.defaultTime);
  };

  const startTimer = () => {
    setAlerta({
      message: "Working!!",
      type: "work",
    });
    setRunning(true);
    setActive(false);
    setcolor("work")
    return setTime(times.defaultTime);
  };

  const setTimeForShortBreak = () => {
    setAlerta({
      type: "shortBreak",
      message: "Taking a short Break!!",
    });
    setRunning(true);
    setActive(false);
    setcolor("shortBreak");
    return setTime(times.shortBreak);

  };

  const setTimeForLongBreak = () => {
    setAlerta({
      type: "longBreak",
      message: "Taking a long Break!!",
    });
    setRunning(true);
    setActive(false);
    setcolor("longBreak");
    return setTime(times.longBreak);
  };

  const setStop = () => {
    if (running) {
      setRunning(false);
      setPause(true);
    } else {
      setRunning(true);
      setPause(false);
    }
  };

  //visualizar los datos convertidos
  const displayTimer = (seconds) => {
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor((seconds % 3600) % 60);
    return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  };
  //destructuring
  const { message, type } = alerta;
  console.log(message)
  console.log(timer.time)

  return (
    <>
      {message ? (
        <NotificationDiv type={type} running={running}>
          <h1>{running || timer.time===0 ? message : "Pause!!!!"}</h1>
        </NotificationDiv>
      ) : (
       ""
      )}
      <ContainerTimer>
        <Timer>{displayTimer(timer.time)}</Timer>
      </ContainerTimer>
      <Contendorbutton>
        <Button
          color={color? color : null}
          className="short"
          disabled={pause ? "disabled" : ""}
          onClick={setTimeForShortBreak}
        >
          Short Break
        </Button>

        <Button
          color={color? color : null}
          className="start"
          onClick={startTimer}
          disabled={pause ? "disabled" : ""}
        >
          Start Working
        </Button>

        <Button
          color={color? color : null}
          className="long"
          onClick={setTimeForLongBreak}
          disabled={pause ? "disabled" : ""}
        >
          Long Break
        </Button>

        <Button
          color={color? color : null}
          className="stop"
          onClick={setStop}
          disabled={active ? "disabled" : ""}
        >
          {!pause ? "Pause" : pause ? "Continued" : ""}
        </Button>
      </Contendorbutton>

      <Containerimg>
        <Img />
      </Containerimg>
    </>
  );
};

export default Pomodoro;
