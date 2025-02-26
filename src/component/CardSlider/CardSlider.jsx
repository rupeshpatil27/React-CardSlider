import React, { useRef, useState } from "react";
import "./CardSlider.css";

import {
  MdArrowForwardIos,
  MdArrowBackIos,
} from "react-icons/md";

import Card from "../Card/Card";

const CardSlider = ({
  cardSliderTitle = "",
  data = null,
  isButtonVisible = false,
  isDraggable = false,
}) => {
  let cardList = useRef(null);
  let isDragging = false;
  let startX, startScrollLeft;

  const [isLeftScroll, setIsLeftScroll] = useState(false);
  const [isRightScroll, setIsRightScroll] = useState(true);

  const dragStart = (e) => {
    if (!isDraggable) return;
    isDragging = true;
    cardList.current.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = cardList.current.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDraggable) return;
    if (isDragging) {
      cardList.current.scrollLeft = startScrollLeft - (e.pageX - startX);
    }
  };

  const dragStop = (e) => {
    if (!isDraggable) return;
    isDragging = false;
    cardList.current.classList.remove("dragging");
  };

  const slideProducts = (type) => {
    const firstCardWidth = cardList.current.children[0].offsetWidth;
    cardList.current.scrollLeft +=
      type === "left" ? -firstCardWidth : firstCardWidth;
  };

  const handleSlideButton = () => {
    if (!isButtonVisible) return;

    setIsLeftScroll(cardList.current.scrollLeft <= 0 ? false : true);

    setIsRightScroll(
      cardList.current.scrollLeft >= cardList.current.scrollLeftMax
        ? false
        : true
    );
  };

  return (
    <div className="card-slider">
      <div className="card-container">
        <a className="card-header">
          <div className="header-title">{cardSliderTitle}</div>
          <div className="header-btn">
            <MdArrowForwardIos className="icon" />
          </div>
        </a>

        <div className="card-body">
          <div
            className="card-list"
            ref={cardList}
            onMouseDown={dragStart}
            onMouseMove={dragging}
            onMouseUp={dragStop}
            onMouseLeave={dragStop}
            onScroll={handleSlideButton}
          >
            {data.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>

          {isButtonVisible && (
            <>
              {isLeftScroll && (
                <button
                  className="slider-btn left"
                  id="left"
                  onClick={() => slideProducts("left")}
                >
                  <MdArrowBackIos className="icon" />
                </button>
              )}

              {isRightScroll && (
                <button
                  className="slider-btn right"
                  id="right"
                  onClick={() => slideProducts("right")}
                >
                  <MdArrowForwardIos className="icon" />
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
