import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <div className="logo">
        <Link to="/shopping-cart" className="link">
          <h2>Leather Bags</h2>
        </Link>
      </div>
      <div className="nav-links">
        <ul className="nav-links">
          <Link to="/shop" className="link">
            <li>Shop</li>
          </Link>
          <Link to="/shop">
            <li>
              <button onClick={props.toggle} className="cart-btn">
                <i className="fas fa-shopping-cart cart">
                  {props.products
                    .map((item) => item.quantity)
                    .reduce((prev, next) => prev + next)}
                </i>
              </button>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
