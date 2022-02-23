import React from "react";
import css from "./MenuOpen.css";
import closeButton from "../../assets/Vector.png";
import { useUserEmail } from "../../hooks";

export function MenuOpen(props) {
    
    const [email, setEmail] = useUserEmail();

    return <div className={css["menu-open"]}>
        <img onClick={props.toggle} className={css["close-button"]} src={closeButton} />
        <p onClick={props.misDatos} className={css["mis-datos"]}> Mis Datos/Registrarse </p>
        <p onClick={props.misMascotas} className={css["mis-mascotas-reportadas"]}> Mis mascotas reportadas </p>
        <p onClick={props.reportarMascota} className={css["reportar-mascota"]}> Reportar mascota</p>
        <label className={css["label-email"]} >
            <p className={css["email"]}> {email} </p>
        </label>
        <p onClick={props.cerrarSesion} className={css["cerrar-sesion"]}> cerrar sesión </p>
    </div>
}