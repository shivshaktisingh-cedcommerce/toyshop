import React from "react";
import "./Slider.css";
import leftArrow from "../src/icons/left-arrow.svg";
import rightArrow from "../src/icons/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow}  alt=""/>
    </button>
  );
}
