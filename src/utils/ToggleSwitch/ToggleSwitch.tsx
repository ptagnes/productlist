import React from "react";
import "./ToggleSwitch.css";

export default function Toggle(props: any) {
  const clickHandler = props.clickHandler;
  const toggleState = props.toggleState;

  return <div className={`switch ${toggleState}`} onClick={clickHandler} />;
}
