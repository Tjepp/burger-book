import React from "react";
import { Typography, Slider as MuiSlider } from "@mui/material";
import { SliderType } from "../types";

type SliderProps = {
  title: string;
  onChange: (value: number, type: SliderType) => void;
  type: SliderType;
};

const Slider: React.FC<SliderProps> = ({ title, onChange, type }) => {
  return (
    <>
      <Typography gutterBottom>{title}</Typography>
      <MuiSlider
        defaultValue={1}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={5}
        onChange={(_, value) => {
          const number = Array.isArray(value) ? value[0] : value;
          onChange(number, type);
        }}
      />
    </>
  );
};

export default Slider;
