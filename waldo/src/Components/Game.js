import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./Game.css";
import { Link } from "react-router-dom";
import odlaw from "../Images/odlawNobackGround.jpg";
import waldo from "../Images/waldoNoBackground.jpg";
import { inRange } from "lodash";
import Timer from "./Timer";

function Game(props) {
  // States
  const [style, setStyle] = useState();
  const [clickedAt, setClickedAt] = useState();
  const [gameOver, setGameOver] = useState({
    waldo: false,
    odlaw: false,
  });
  const [pos, setPos] = useState({ scale: 1 });
  const [getTime, setGetTime] = useState(false);
  const [waldoPosition, setWaldoPosition] = useState({ display: "none " });
  const [odlawPosition, setOdlawPosition] = useState({ display: "none" });
  const [showModal, setShowModal] = useState();

  // stop timer, call display character and set interval to remove character found
  useEffect(() => {
    getEndGameTime(gameOver);
    displayFound(gameOver);
    const displayInterval = setTimeout(() => {
      setWaldoPosition({ display: "none" });
      setOdlawPosition({ display: "none" });
    }, 2000);
    return () => clearTimeout(displayInterval);
  }, [gameOver]);

  // get position of the click in the img
  useEffect(() => {});
  const getClickPosition = (e) => {
    //console.log(e.nativeEvent.offsetX);
    //console.log(e.nativeEvent.target.offsetWidth);
    const X = (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100;
    const Y = (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100;
    console.log(X, Y);
    setClickedAt({ X, Y });
  };

  //set coords for positioning flaoating menu
  const setCoordsMenu = (e) => {
    setStyle({
      position: "absolute",
      left: `${e.pageX}px`,
      top: `${e.pageY}px`,
    });
  };

  // check if the click was in the right position
  const checkInRange = (e) => {
    const { waldo, odlaw } = props.positionList[props.gameLevel];
    let checkX;
    let checkY;
    console.log(clickedAt.X, waldo.minX, waldo.maxX);
    if (e.target.id === "waldo") {
      checkX = inRange(clickedAt.X, waldo.minX, waldo.maxX);
      checkY = inRange(clickedAt.Y, waldo.minY, waldo.maxY);
      if (checkX && checkY) {
        setGameOver({ ...gameOver, waldo: true });
        props.toogleMenu();
      }
    } else if (e.target.id === "odlaw") {
      checkX = inRange(clickedAt.X, odlaw.minX, odlaw.maxX);
      checkY = inRange(clickedAt.Y, odlaw.minY, odlaw.maxY);
      if (checkX && checkY) {
        setGameOver({ ...gameOver, odlaw: true });
        props.toogleMenu();
      }
    }
    console.log(checkX, checkY);
  };

  // zoom image
  //https://codesandbox.io/s/wonderful-cerf-69doe?file=/src/App.js
  const onScroll = (e) => {
    const delta = e.deltaY * -0.001;
    const newScale = pos.scale + delta;
    console.log(newScale);
    if (newScale >= 1) {
      setPos({
        scale: newScale,
      });
    }
  };

  // check if two characters were found stop timer and open modal
  const getEndGameTime = (gameOver) => {
    if (gameOver.waldo && gameOver.odlaw) {
      setGetTime(true);
      setShowModal(!showModal);
    }
  };
  // display alert if character was found
  const displayFound = (gameOver) => {
    if (gameOver.waldo) {
      setWaldoPosition({
        ...style,
        display: "block",
      });
    } else if (gameOver.odlaw) {
      setOdlawPosition({
        ...style,
        display: "block",
      });
    }
  };
  const restart = () => {
    setGameOver({
      waldo: false,
      odlaw: false,
    });
  };

  return (
    <div className="box">
      <header>
        <Link to="/waldo" className="text-link">
          <div>
            <h1>Where's Waldo ?</h1>
          </div>
        </Link>
        <Timer
          getTime={getTime}
          showModal={showModal}
          restart={restart}
          db={props.db}
          gameLevel={props.gameLevel}
        ></Timer>
        <div className="character">
          <img src={waldo} alt="waldo"></img>
          <img src={odlaw} alt="odlaw"></img>
        </div>
      </header>
      <div className="img-boxGame" onWheelCapture={onScroll}>
        <img
          onClick={(e) => {
            getClickPosition(e);
            props.toogleMenu();
            setCoordsMenu(e);
          }}
          src={props.levels[props.gameLevel]}
          alt="where's waldo"
          id="gameImg"
          style={{
            transformOrigin: "0 0",
            transform: `scale(${pos.scale})`,
          }}
        />
      </div>
      <div id="waldoBox" style={waldoPosition}>
        <h3>Waldo Found</h3>
      </div>
      <div id="waldoBox" style={odlawPosition}>
        <h3>Odlaw Found</h3>
      </div>
      {props.toogle ? (
        <div style={style} className="menu-box">
          <div className="char-box">
            <button
              className="char-box char-btn"
              onClick={(e) => {
                checkInRange(e);
                props.toogleMenu();
              }}
              id="waldo"
            >
              <img src={waldo} alt="waldo"></img>
              Waldo
            </button>
          </div>
          <div className="char-box">
            <button
              className="char-box char-btn"
              onClick={(e) => {
                checkInRange(e);
                props.toogleMenu();
              }}
              id="odlaw"
            >
              <img src={odlaw} alt="odlaw"></img>
              Odlaw
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Game;
