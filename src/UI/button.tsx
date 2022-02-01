import React from "react";
import css from "./button.css";

export function MainButton({ children }) {
  return <button className={css.root}> {children} </button>;
}