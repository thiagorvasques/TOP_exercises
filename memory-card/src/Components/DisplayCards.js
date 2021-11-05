import React, { useState, useEffect } from "react";
import "../Styles/DisplayCards.css";
import Modal from "./Modal";

function DisplayCards(props) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [winner, setWinner] = useState(null);
  const [displayWinnerText, setDisplayWinnerText] = useState(null);

  const handleScore = () => {
    setScore(score + 1);
  };
  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
    if (winner !== null) {
      setScore(0);
      setWinner(null);
    }
  }, [score, bestScore, winner]);

  const handleWinner = (e) => {
    if (e.target.dataset.clicked === "true") {
      console.log("You lose");
      setWinner(false);
      setDisplayWinnerText(false);
      props.toggleModal(e);
    }
    if (score === props.cards.length - 1) {
      console.log("You win");
      setWinner(true);
      setDisplayWinnerText(true);
      props.toggleModal(e);
    }
  };

  return (
    <div className="fullPage">
      <header>
        <div className="memo">
          <h1>MEMORY GAME</h1>
        </div>
        <div className="scores memo">
          <h2>Score: {score}</h2>
          <h2>Best Score: {bestScore}</h2>
        </div>
      </header>
      <main className="container">
        <div className="table">
          {props.cards.map((card, index) => {
            return (
              <div key={card.id} className="photoBox">
                <img
                  data-clicked={card.clicked}
                  name={card.id}
                  src={card.link}
                  alt={props.theme}
                  onClick={(e) => {
                    props.handleClick(e);
                    handleWinner(e, props);
                    handleScore();
                  }}
                ></img>
              </div>
            );
          })}
        </div>
        {props.toggle ? (
          <div>
            <Modal
              toggleModal={(e) => props.toggleModal(e)}
              handleForm={(e) => props.handleForm(e)}
              handleInput={(e) => props.handleInput(e)}
              toggle={props.toggle}
              score={score}
              displayWinnerText={displayWinnerText}
              query={props.query}
            />
          </div>
        ) : null}
      </main>
    </div>
  );
}

export default DisplayCards;
