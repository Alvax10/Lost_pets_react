import React from "react";
import css from "./GreenButton.css";

export function GreenButton({ children: children }) {
    return <button className={css.root}> {children} </button>;
}