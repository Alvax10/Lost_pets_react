import React from "react";
import css from "./header.css";
import { MenuOpen } from "./MenuOpen";
import { useNavigate } from "react-router-dom";
import { useToggle, useToken } from "../../hooks";
import logoHeader from "../../assets/logo-pata.png";
import burgerMenu from "../../assets/burger-menu.png";

export function HeaderPage() {

    const [token, setToken] = useToken();
    const [toggle, setToggle] = useToggle();
    const navigate = useNavigate(); 
    function goToHome() {
        navigate("/home");
    }

    function goToMisDatos() {
        
        if (token)  {
            setToggle(false);
            navigate("/mis-datos");
            
        } else {
            setToggle(false);
            navigate("/login");
        }
    }

    function goToMisMascotas() {
        
        if (token)  {
            setToggle(false);
            navigate("/mis-mascotas");
            
        } else {
            setToggle(false);
            navigate("/login");
        }
    }

    function goToReportarMascota() {
        
        if (token)  {
            setToggle(false);
            navigate("/reportar-mascota");
            
        } else {
            setToggle(false);
            navigate("/login");
        }
    }

    function finishSesion(e) {
        e.preventDefault();
        setToggle(false);
        localStorage.clear();
        navigate("/home");
    }

    return toggle ?

        <MenuOpen toggle={() => setToggle(false)} misDatos={goToMisDatos} misMascotas={goToMisMascotas} reportarMascota={goToReportarMascota} cerrarSesion={finishSesion}> {console.log("Toggle is true")} </MenuOpen>
    :
        <div>
            <header className={css.header}> 
                <img className={css.logoMenu} onClick={goToHome} src={logoHeader} />
                <img onClick={() => setToggle(true)} className={css.burgerMenu} src={burgerMenu} />
            </header>
            {console.log("Toggle is false")}
        </div>
}