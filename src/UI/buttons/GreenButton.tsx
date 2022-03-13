import React from "react";
import css from "./GreenButton.css";

export function GreenButton(props) {

    return <button onClick={props?.onClick} className={css.root && props?.class}> { props.children } </button>;
}