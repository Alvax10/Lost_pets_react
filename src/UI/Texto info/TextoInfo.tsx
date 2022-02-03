import React from "react";
import css from "./TextInfo.css";

export function TextInfo(props) {
    return <p style={props.style} className={css.info}> {props.children} </p>;
}