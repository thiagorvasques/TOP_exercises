import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/storage";
import Home from "./Components/Home.js";
import Game from "./Components/Game";
import LeaderBoard from "./Components/LeaderBoard";

function App() {
  const [levels, setLevels] = useState([]);
  const [gameLevel, setGameLevel] = useState("");
  const [toogle, setToogle] = useState(false);
  const [positionList, setPositionList] = useState([]);

  // define firebase storage
  const storage = firebase.storage().ref();
  // define firebase firestore
  const db = firebase.firestore();

  //get firestore data
  useEffect(() => {
    const fetchPosition = async () => {
      const response = db.collection("levels");
      const data = await response.get();
      data.docs.map((item) => {
        console.log(item.data());
        positionList.push(item.data());
        return setPositionList(positionList);
      });
    };
    fetchPosition();
  }, []);

  // get images from firebase storage
  useEffect(() => {
    const fetchImages = async () => {
      let result = await storage.child("waldos").listAll();
      let urlPromises = result.items.map((imageRef) =>
        imageRef.getDownloadURL()
      );

      return Promise.all(urlPromises);
    };

    const loadImages = async () => {
      const urls = await fetchImages();
      setLevels(urls);
    };
    loadImages();
  }, []);

  const setGame = (e) => {
    setGameLevel(e.target.id);
  };

  const toogleMenu = () => {
    setToogle(!toogle);
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/waldo">
            <Home levels={levels} setGame={setGame} />
          </Route>
          <Route path="/game">
            <Game
              levels={levels}
              gameLevel={gameLevel}
              toogleMenu={toogleMenu}
              toogle={toogle}
              positionList={positionList}
              db={db}
            />
          </Route>
          <Route path="/leaderboard">
            <LeaderBoard gameLevel={gameLevel} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
