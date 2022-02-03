import React from "react";
import css from "./InputLabel.css";

export function InputLabel(props) {
    return <label className={css.label}>
        <p className={css.label}> {props.label} </p>
        <input className={css.input} name={props.name} type={props.type} placeholder={props.placeholder} />
    </label>
}