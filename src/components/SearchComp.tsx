import React from "react";
import css from "./searchComp.css";

export function SearchQuery(props) {

    return (
        <div className={css["prod-card"]}>
            <img className={css["prod-image"]} src={props.img} alt="Imagen del producto"></img>
            <h3 className={css["prod-title"]}> {props.title} </h3>
            <h4 className={css["prod-price"]}> ${props.price} </h4>
        </div>
    );
}

