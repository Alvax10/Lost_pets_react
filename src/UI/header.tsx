import React from "react";
import logoHeader from "../assets/logo-pata.png";
import burgerMenu from "../assets/burger-menu.png";
import css from "./header.css";
import { useNavigate } from "react-router-dom";

export function HeaderPage() {

    const navigate = useNavigate(); 
    function goToHome() {
        navigate("/home");
    }
    return <header className={css.header}> 
        <img className={css.logoMenu} onClick={goToHome} src={logoHeader} />
        <img className={css.burgerMenu} onClick={goToHome} src={burgerMenu} />
    </header>;
}