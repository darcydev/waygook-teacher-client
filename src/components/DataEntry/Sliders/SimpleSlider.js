import React from "react";
import { Slider } from "antd";

export default function SimpleSlider({
  label = "Default Label",
  minValue = 0,
  maxValue = 100,
  styles = undefined,
  range = true,
  disabled = false
}) {
  return (
    <div style={styles}>
      <p>{label}</p>
      <Slider
        range={range}
        defaultValue={[minValue, maxValue]}
        disabled={disabled}
      />
    </div>
  );
}
