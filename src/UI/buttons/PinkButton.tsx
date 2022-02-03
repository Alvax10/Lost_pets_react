import React from "react";
import css from "./PinkButton.css";

export function PinkButton(props) {

  return <button onClick={props?.onClick} className={css.root}> {props.children} </button>;
}