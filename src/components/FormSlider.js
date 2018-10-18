import "rc-slider/assets/index.css";
import React from "react";
import Slider from "rc-slider";

const FormSlider = ({ value, handleSliderChange }) => {
  return (
    <Slider
      value={value}
      onChange={handleSliderChange}
      min={0}
      max={3000}
      step={5}
    />
  );
};

export default FormSlider;
