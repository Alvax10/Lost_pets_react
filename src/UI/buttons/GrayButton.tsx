import React from "react";
import css from "./GrayButton.css";

export function GrayButton(props) {

    return <button onClick={props?.onClick} className={css.root}> { props.children } </button>;
}