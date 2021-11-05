import React, { useEffect } from "react";
import "../Styles/Modal.css";

function Modal(props) {
  return (
    <div
      className="modal"
      style={{ display: `${props.toggle ? "block" : "none"}` }}
    >
      <div className="modal-content" id="theModal">
        {props.displayWinnerText ? (
          <div className="memo">
            <h2>You got it!</h2>
          </div>
        ) : props.displayWinnerText === false ? (
          <div className="memo">
            <h2>You didn't get it!</h2>
          </div>
        ) : null}
        <form>
          <div className="memo modalText">
            <label htmlFor="theme">
              <h2>Choose a theme (i.e Dogs, Cats, Flowers)</h2>
            </label>
          </div>
          <input
            onChange={(e) => props.handleForm(e)}
            type="text"
            name="theme"
          />
          <div className="memo level">
            <label htmlFor="levels">
              <h2>Choose a level</h2>
            </label>
          </div>
          <select name="quantity" onClick={(e) => props.handleInput(e)}>
            <option value="5">Easy</option>
            <option value="10">Medium</option>
            <option value="15">Hard</option>
            <option value="20">Extra Hard</option>
          </select>
        </form>
        <button
          type="submit"
          className="memo"
          onClick={(e) => props.toggleModal(e)}
        >
          Start
        </button>
        <h6 className="memo">
          Try to remember the images you´ve clicked and don't click in the same
          image
        </h6>
        {props.query.error ? (
          <h4 className="memo">Search did not return expect result</h4>
        ) : null}
      </div>
    </div>
  );
}

export default Modal;
