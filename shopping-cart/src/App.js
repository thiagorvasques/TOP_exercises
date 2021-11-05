import React, { useState } from "react";
import "./App.css";
import Nav from "./Components/Pages/Nav";
import Shop from "./Components/Pages/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products";

function App() {
  const [toggleModal, setToggleModal] = useState(false);
  const [products, setProducts] = useState(Products);

  const toggle = () => {
    setToggleModal(!toggleModal);
  };

  const addProduct = (index) => {
    setProducts(
      products.map((item, i) => {
        if (index === i) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      })
    );
  };
  const deleteProduct = (index) => {
    setProducts(
      products.map((item, i) => {
        if (index === i) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      })
    );
  };

  return (
    <Router>
      <div className="App">
        <Nav toggle={toggle} products={products} />
        <Switch>
          <Route path="/shopping-cart" exact component={Home} />
          <Route path="/shop">
            <Shop
              addProduct={addProduct}
              toggleModal={toggleModal}
              toggle={toggle}
              products={products}
              deleteProduct={deleteProduct}
            />
          </Route>
        </Switch>
        <footer>
          <h5>
            {" "}
            Content from{" "}
            <a href="https://www.danielevasques.com.br/">
              danielevasques.com.br
            </a>
          </h5>
        </footer>
      </div>
    </Router>
  );
}

export default App;
