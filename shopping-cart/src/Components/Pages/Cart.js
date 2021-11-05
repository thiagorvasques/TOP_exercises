import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Cart(props) {
  const [toggleProducts, setToggleProducts] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  // caculate total quantity
  useEffect(() => {
    setQuantity(
      props.products
        .map((item) => item.quantity)
        .reduce((prev, next) => prev + next)
    );
  }, [props.products]);

  //calculate total price
  useEffect(() => {
    setTotal(
      props.products
        .map((item) => item.quantity * item.price)
        .reduce((prev, next) => prev + next)
    );
  }, [props.products]);
  const seeProducts = () => {
    setToggleProducts(!toggleProducts);
  };

  // currency formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div>
      <div className="modal"></div>
      <div className="modal-content">
        <button className="add-btn close" onClick={() => props.toggle()}>
          &times;
        </button>
        <div className="cart-content">
          <h4>Quantity: {quantity}</h4>
          <h4>Total: {formatter.format(total)}</h4>
          {quantity > 0 ? (
            <div className="checkout-box">
              <Link to="/shopping-cart">
                <button onClick={() => props.toggle()} className="add-btn">
                  {" "}
                  Checkout{" "}
                </button>
              </Link>
              <button onClick={seeProducts} className="add-btn">
                See Products
              </button>
            </div>
          ) : null}

          <div>
            <div className="products">
              {toggleProducts
                ? props.products.map((item, index) => {
                    if (item.quantity > 0) {
                      return (
                        <div key={index} className="item">
                          <img src={item.link} alt="bags"></img>
                          <div className="cartBtn-box">
                            <button
                              className="add-btn"
                              onClick={() => props.deleteProduct(index)}
                            >
                              -
                            </button>
                            <h4>{item.quantity}</h4>
                            <button
                              className="add-btn"
                              onClick={() => props.addProduct(index)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
