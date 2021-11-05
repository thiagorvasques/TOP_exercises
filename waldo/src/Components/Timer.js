import React, { useState, useEffect } from "react";
import EndModal from "./EndModal";

function Timer(props) {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let counter = 0;
    if (props.getTime) {
      setTimer(timer);
    } else {
      counter = setTimeout(() => {
        setTimer(timer + 1);
      }, 1000);
    }

    return () => clearTimeout(counter);
  }, [props.getTime, timer]);

  const getSeconds = `0${timer % 60}`.slice(-2);
  const minutes = `${Math.floor(timer / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);

  return (
    <div>
      {getMinutes} : {getSeconds}
      {props.showModal ? (
        <EndModal
          getSeconds={getSeconds}
          getMinutes={getMinutes}
          restart={props.restart}
          timer={timer}
          db={props.db}
          gameLevel={props.gameLevel}
        />
      ) : null}
    </div>
  );
}

export default Timer;
