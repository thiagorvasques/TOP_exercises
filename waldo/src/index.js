import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";

var config = {
  apiKey: "AIzaSyAXqfEPBX9cndWJKQ5ywWsexSzLvUh3Pbc",
  authDomain: "waldo-b3544.firebaseapp.com",
  projectId: "waldo-b3544",
  storageBucket: "waldo-b3544.appspot.com",
  messagingSenderId: "523669660286",
  appId: "1:523669660286:web:6b3f6776c562bc558f6e2f",
};

firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
