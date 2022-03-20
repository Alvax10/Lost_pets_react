import React, { useEffect } from "react";
import css from "./MenuOpen.css";
import closeButton from "../../assets/Vector.png";
import { useUserEmail, useToken, useGeoloc } from "../../hooks";
import { useNavigate } from "react-router-dom";

export function MenuOpen(props) {
    
    const navigate = useNavigate()
    const [token, setToken] = useToken();
    const [loc, setLoc] = useGeoloc();
    const [email, setEmail] = useUserEmail();

    useEffect(() => {
        if (loc == null) {
            navigate("/");
        }
        if (token == null && email == null) {
            navigate("/login");
        }
    },[])

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