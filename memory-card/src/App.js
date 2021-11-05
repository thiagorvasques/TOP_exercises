import "./App.css";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import DisplayCards from "./Components/DisplayCards";
import Modal from "./Components/Modal";

function App(props) {
  const [cards, setCards] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [query, setQuery] = useState({
    theme: "dog",
    quantity: "5",
    error: false,
  });

  // set the parameters to make the request
  const handleForm = (e) => {
    console.log("handle form called");
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleInput = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };
  // handles open and close modal
  const toggleModal = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };
  // request pixabay api
  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=2373143-eb0dc84fd81c60eb859a6ecc5&q=${query.theme}&image_type=photo&per_page=${query.quantity}&orientation=horizontal&min_width=2000&min_height=2000`
      )
      .then((response) => {
        // set the object to keep track
        console.log(Object.keys(response.data.hits).length);
        if (Object.keys(response.data.hits).length !== Number(query.quantity)) {
          console.log("search did not return expect result");
          setQuery({
            ...query,
            error: true,
          });
          setToggle(true);
        }
        setCards(
          response.data.hits.map((hit) => {
            return {
              id: hit.id,
              link: hit.webformatURL,
              clicked: false,
            };
          })
        );
      })
      .catch((error, reponse) => {
        console.log(error, reponse);
        if (reponse.lenght !== query.quantity) {
          console.log(error);
        }
      });
  }, [toggle]);

  // shuffle array when image is clicked and set the click value to true
  const handleClick = (e) => {
    setCards(
      cards
        .sort(() => Math.random() - 0.5)
        .map((obj) =>
          obj.id === Number(e.target.name)
            ? {
                ...obj,
                clicked: true,
              }
            : obj
        )
    );
  };

  return (
    <div>
      <Modal
        toggleModal={toggleModal}
        handleForm={handleForm}
        handleInput={handleInput}
        toggle={toggle}
        query={query}
      />

      <div>
        <DisplayCards
          cards={cards}
          query={query}
          handleClick={handleClick}
          toggleModal={toggleModal}
          handleForm={handleForm}
          handleInput={handleInput}
          toggle={toggle}
        />
      </div>
    </div>
  );
}

export default App;
