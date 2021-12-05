import React from "react";
import "./BlueButton.scss";
function BlueButton(props) {
  return (
    <button
      className="Vazaar-Blue-Button"
      style={{ width: props.width, height: props.height }}
    >
      {props.text}
    </button>
  );
}
export default BlueButton;
