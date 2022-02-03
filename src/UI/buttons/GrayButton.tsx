import React from "react";
import css from "./GrayButton.css";

export function GrayButton({ children }) {
    return <button className={css.root}> {children} </button>;
}