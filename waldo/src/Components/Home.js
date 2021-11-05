import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <>
      {props.levels.length !== 0 ? (
        <div className="container">
          <div>
            <h1>Where's Waldo?</h1>
          </div>
          <div className="start-box">
            <div className="image-box">
              <h2>Easy</h2>
              <img src={props.levels[0]} alt="Waldo easy" />
              <Link to="/game" className="text-link">
                <button
                  className="start-btn"
                  onClick={(e) => props.setGame(e)}
                  id="0"
                >
                  Start
                </button>
              </Link>
            </div>
            <div className="image-box">
              <h2>Medium</h2>
              <img src={props.levels[1]} alt="waldo medium" />
              <Link to="/game">
                <button
                  className="start-btn"
                  onClick={(e) => props.setGame(e)}
                  id="1"
                >
                  Start
                </button>
              </Link>
            </div>
            <div className="image-box">
              <h2>Hard</h2>
              <img src={props.levels[2]} alt="Waldo hard" />
              <Link to="/game">
                <button
                  className="start-btn"
                  onClick={(e) => props.setGame(e)}
                  id="2"
                >
                  Start
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Home;
