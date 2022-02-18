import React from "react";
import css from "./MenuOpen.css";
import { useNavigate } from "react-router-dom";
import closeButton from "../../assets/Vector.png";
import { useToggle, useUserEmail, useToken } from "../../hooks";

export function MenuOpen(props) {
    
    const navigate = useNavigate();
    const [token, setToken] = useToken();
    const [toggle, setToggle] = useToggle();
    const [email, setEmail] = useUserEmail();

    function goToMisDatos() {
        
        if (token)  {
            setToggle(false);
            navigate("/mis-datos");
            
        } else {
            navigate("/login");
            setToggle(false);
        }
    }
        
    function goToMisMascotas() {
        
        if (token)  {
            setToggle(false);
            navigate("/mis-mascotas");
            
        } else {
            navigate("/login");
            setToggle(false);
        }
    }
        
    function goToReportarMascota() {
        
        if (token)  {
            setToggle(false);
            navigate("/reportar-mascota");
            
        } else {
            navigate("/login");
            setToggle(false);
        }
    }

    function finishSesion(e) {
        e.preventDefault();
        setToggle(false);
        localStorage.clear();
        navigate("/home");
    }

    return <div className={css["menu-open"]}>
        <img onClick={props.toggle} className={css["close-button"]} src={closeButton} />
        <p onClick={goToMisDatos} className={css["mis-datos"]}> Mis Datos/Registrarse </p>
        <p onClick={goToMisMascotas} className={css["mis-mascotas-reportadas"]}> Mis mascotas reportadas </p>
        <p onClick={goToReportarMascota} className={css["reportar-mascota"]}> Reportar mascota</p>
        <label className={css["label-email"]} >
            <p className={css["email"]}> {email} </p>
        </label>
        <p onClick={finishSesion} className={css["cerrar-sesion"]}> cerrar sesión </p>
    </div>
}