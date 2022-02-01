import React from "react";
import css from "./textField.css";

export function TextField({ children }) {
    return <label>
        <input name="query" className={css.input} placeholder=' Buscar...'></input>
        {children}
    </label>
  }