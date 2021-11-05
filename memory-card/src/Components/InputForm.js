import axios from "axios";
import React, { useState, useEffect } from "react";

function InputForm(props) {
  const [query, setTheme] = useState({
    theme: "",
    quantity: "",
  });

  const handleForm = (e) => {
    setTheme({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=2373143-eb0dc84fd81c60eb859a6ecc5&q=${query.theme}&image_type=photo&per_page=${query.quantity}`
      )
      .then((response) => {
        console.log(response.data.hits);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.toggle]);

  return (
    <div>
      <h1>Memory Game</h1>
      <form onChange={(e) => handleForm(e, props)}>
        <div>
          <label htmlFor="theme">
            Choose a theme (i.e Dogs, Cats, Flowers)
          </label>
        </div>
        <input type="text" name="theme" />
        <div>
          <label htmlFor="levels">Choose a level</label>
        </div>
        <select name="quantity">
          <option value="5">Easy</option>
          <option value="10">Medium</option>
          <option value="15">Hard</option>
          <option value="20">Extra Hard</option>
        </select>
      </form>
    </div>
  );
}

export default InputForm;
