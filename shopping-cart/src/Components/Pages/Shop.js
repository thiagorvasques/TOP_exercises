import React from "react";
import "./shop.css";

import Cart from "./Cart";
function Shop(props) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="grid-box">
      {props.toggleModal ? (
        <Cart
          products={props.products}
          deleteProduct={props.deleteProduct}
          addProduct={props.addProduct}
          toggle={props.toggle}
        />
      ) : null}
      <div className="grid">
        {props.products.map((item, index) => {
          return (
            <div className="product-box" key={item.id}>
              <img className="images" src={item.link} alt="products" />
              <div className="prices">
                <h4>Price: {formatter.format(item.price)}</h4>
                <button
                  className="add-btn"
                  onClick={() => props.addProduct(index)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
