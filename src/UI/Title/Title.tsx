import React from "react";
import css from "./Title.css";

export function CustomTitle({ children }) {
    return <h2 className={css.title} > {children} </h2>;
}