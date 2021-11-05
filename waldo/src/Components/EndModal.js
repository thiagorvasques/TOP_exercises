import React, { useState } from "react";
import { Link } from "react-router-dom";

function EndModal(props) {
  const [name, setName] = useState("");

  //set player name
  const getName = (e) => {
    //console.log(e.target.value);
    setName(e.target.value);
  };
  //send name and time to firestore
  const saveToLeaderboard = (e) => {
    console.log("save");
    props.db
      .collection(props.gameLevel)
      .add({
        name: name,
        seconds: props.timer,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <h2>
            Your time was {props.getMinutes} : {props.getSeconds}
          </h2>
          <form>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => getName(e)}
            ></input>
            <Link to="/leaderboard">
              <button
                type="submit"
                className="end-btn"
                onClick={(e) => {
                  saveToLeaderboard(e);
                  props.restart();
                }}
              >
                Save to leaderboard
              </button>
            </Link>
            <Link to="/waldo">
              <button type="button" className="end-btn" onClick={props.restart}>
                Restart
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EndModal;
