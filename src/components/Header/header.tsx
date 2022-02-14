import React, { useState } from "react";
import logoHeader from "../../assets/logo-pata.png";
import burgerMenu from "../../assets/burger-menu.png";
import css from "./header.css";
import { useNavigate } from "react-router-dom";
import { MenuOpen } from "./MenuOpen";

export const useToggle = () => useState(false);

export function HeaderPage() {

    const [toggle, setToggle] = useToggle();
    const navigate = useNavigate(); 
    function goToHome() {
        navigate("/home");
    }

    function disaplayMenu() {
        setToggle(true);
    }

    function dontDisplayMenu() {
        setToggle(false);
    }

    return (!toggle ?
        <div>
            <header className={css.header}> 
                <img className={css.logoMenu} onClick={goToHome} src={logoHeader} />
                <img onClick={disaplayMenu} className={css.burgerMenu} src={burgerMenu} />
            </header>
        </div>
        : <MenuOpen toggle={dontDisplayMenu}></MenuOpen>
    );
}