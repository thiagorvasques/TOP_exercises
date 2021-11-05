import React, { useState, useEffect } from "react";
import links from "./links";
import "./carousel.css";
import Buttons from "./Buttons";
function Carousel() {
  const [list] = useState(links);
  const [counter, setCounter] = useState(0);

  // set 4s interval on carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 4000);
    // loop on count
    if (counter === 6) {
      setCounter(0);
      // loop on count
    } else if (counter === -1) {
      setCounter(5);
    }
    return () => clearInterval(interval);
  }, [counter]);

  const goToPrevSlide = (e, actualCount) => {
    setCounter(actualCount - 1);
  };
  const goToNextSlide = (e, actualCount) => {
    setCounter(actualCount + 1);
  };

  let show = "";

  return (
    <div className="carousel-container">
      {list.map((item) => {
        if (item.id === counter) {
          show = "block";
        } else {
          show = "none";
        }
        return (
          <div
            key={item.id}
            className="photo-box fade"
            style={{ display: `${show}` }}
          >
            <img src={item.link} alt="handbags" />
          </div>
        );
      })}

      <Buttons
        goToNextSlide={goToNextSlide}
        goToPrevSlide={goToPrevSlide}
        counter={counter}
      />
    </div>
  );
}

export default Carousel;
