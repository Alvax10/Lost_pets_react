import React from "react";
import css from "./MenuOpen.css";
import closeButton from "../../assets/Vector.png";
import { useUserEmail, useToken } from "../../hooks";

export function MenuOpen(props) {
    
    const [token, setToken] = useToken();
    const [email, setEmail] = useUserEmail();

    return token ? 
    
    <div className={css["menu-open"]}>
        <img onClick={props.toggle} className={css["close-button"]} src={closeButton} />
        <p onClick={props.misDatos} className={css["mis-datos"]}> Mis Datos/Registrarse </p>
        <p onClick={props.misMascotas} className={css["mis-mascotas-reportadas"]}> Mis mascotas reportadas </p>
        <p onClick={props.reportarMascota} className={css["reportar-mascota"]}> Reportar mascota</p>
        <label className={css["label-email"]} >
            <p className={css["email"]}> {email} </p>
        </label>
        <p onClick={props.cerrarSesion} className={css["cerrar-sesion"]}> cerrar sesión </p>
    </div>
    :
    <div className={css["menu-open"]}>
        <img onClick={props.toggle} className={css["close-button"]} src={closeButton} />
        <p onClick={props.misDatos} className={css["mis-datos"]}> Mis Datos/Registrarse </p>
        <p onClick={props.misMascotas} className={css["mis-mascotas-reportadas"]}> Mis mascotas reportadas </p>
        <p onClick={props.reportarMascota} className={css["reportar-mascota"]}> Reportar mascota</p>
    </div>

}