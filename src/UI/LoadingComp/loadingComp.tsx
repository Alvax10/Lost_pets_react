import React from "react";
import css from "./loadingComp.css";

export function LoadingComp() {

    return <div className={css["loading-notification"]}> 
        <h3> Cargando... </h3>
        <div className={css.preloader} ></div>
    </div>;
}