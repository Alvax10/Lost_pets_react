import React from "react";
import closeButton from "../../assets/Vector.png";
import css from "./MenuOpen.css";
import { useNavigate } from "react-router-dom";
import { useLocationBefore, useUserEmail, useToggle, token } from "../../hooks";

export function MenuOpen(props) {
    
    const navigate = useNavigate();
    const [locBefore, setLocBefore] = useLocationBefore();
    const [userEmail, setUserEmail] = useUserEmail();
    const [toggle, setToggle] = useToggle();

    function goToMisDatos() {
        
        if (token)  {
            setToggle(false);
            navigate("/mis-datos");
            
        } else {
            setLocBefore("/mis-datos");
            navigate("/login");
        }
    }
        
    function goToMisMascotas() {
        if (token)  {
            setToggle(false);
            navigate("/mis-mascotas");
            
        } else {
            setLocBefore("/mis-mascotas");
            navigate("/login");
        }
    }
        
    function goToReportarMascota() {
        
        if (token)  {
            setToggle(false);
            navigate("/reportar-mascota");
            
        } else {
            setLocBefore("/reportar-mascota");
            navigate("/login");
        }
    }

    function finishSesion() {
        setToggle(false);
        localStorage.removeItem("auth_token");
    }

    return (<div className={css["menu-open"]}>
        <img onClick={props.toggle} className={css["close-button"]} src={closeButton} />
        <p onClick={goToMisDatos} className={css["mis-datos"]}> Mis Datos/Registrarse </p>
        <p onClick={goToMisMascotas} className={css["mis-mascotas-reportadas"]}> Mis mascotas reportadas </p>
        <p onClick={goToReportarMascota} className={css["reportar-mascota"]}> Reportar mascota</p>
        <label className={css["label-email"]} >
            <p className={css["email"]}> {userEmail} </p>
        </label>
            <p onClick={finishSesion} className={css["cerrar-sesion"]}> cerrar sesión </p>
    </div>);
}