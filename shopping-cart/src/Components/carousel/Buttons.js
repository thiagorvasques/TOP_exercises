import React from "react";

function Buttons(props) {
  //carousel buttons
  return (
    <div className="button-box">
      <div className="buttons">
        <div
          className="left-arrow prev"
          onClick={(e) => props.goToPrevSlide(e, props.counter)}
        >
          <i className="fa fa-angle-left fa-3x"></i>
        </div>
        <div
          className="right-arrow next"
          onClick={(e) => props.goToNextSlide(e, props.counter)}
        >
          <i className="fa fa-angle-right fa-3x"></i>
        </div>
      </div>
      <div className="dots-box">
        <div>
          <span className={`dot ${props.counter === 0 ? "active" : ""}`}></span>
          <span className={`dot ${props.counter === 1 ? "active" : ""}`}></span>
          <span className={`dot ${props.counter === 2 ? "active" : ""}`}></span>
          <span className={`dot ${props.counter === 3 ? "active" : ""}`}></span>
          <span className={`dot ${props.counter === 4 ? "active" : ""}`}></span>
          <span className={`dot ${props.counter === 5 ? "active" : ""}`}></span>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
