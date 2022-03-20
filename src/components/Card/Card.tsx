import css from "./Card.css";
import React, { useState, useEffect } from "react";
import closeButton from "../../assets/Vector.png";
import { InputLabel } from "../../UI/InputLabel/InputLabel";
import { PinkButton } from "../../UI/buttons/PinkButton";
import { sendEmailto } from "../../lib/send-mail-api";
import { useNavigate } from "react-router-dom";
import { useUserEmail, useToken, useGeoloc } from "../../hooks";

export const useToggle = () => useState(false);

export function CardComp(props) {
    const navigate = useNavigate();
    const [token, setToken] = useToken();
    const [geoloc, setGeoloc] = useUserEmail();
    const [userEmail, setUserEmail] = useUserEmail();
    const [toggle, setToggle] = useToggle();

    useEffect(() => {
        if (geoloc == {lat: null, lng: null} && token == null) {
            navigate("/");
        } else if (token == null) {
            navigate("/login");
        } else {
            navigate("/");
        }
    },[]);

    async function sendEmail(e) {
        e.preventDefault();

        setToggle(false);
        navigate("/home");
        const lastSeen = e.target.message.value;
        const userPhone = e.target.userphone.value;
        await sendEmailto(props.petName, lastSeen, userEmail, userPhone, token);
        await alert("Email enviado correctamente!");
    }

    return toggle ? <div className={css.note}>
            <img src={closeButton} className={css["close-button"]} alt="Botón de cierre" onClick={() => setToggle(false)} />
            <h3 className={css["note-title"]}> Reportar info de {props.petName} </h3>
            <form onSubmit={sendEmail} className={css["form"]}>
                <InputLabel label="Nombre de usuario" type="text" name="username" placeholder="Ej: Alvaro" ></InputLabel>
                <InputLabel label="Número del usuario" type="tel" name="userphone" placeholder="Ej: 3492123456" ></InputLabel>
                <InputLabel label="¿Donde lo viste?" type="text" name="message" placeholder="Ej: Plaza 25 de mayo" ></InputLabel>
                <PinkButton className={css.button}> Enviar </PinkButton>
            </form>
        </div>
    :
    <div className={css.card}>
            <img className={css.img} src={props.src} alt="Imagen de la mascota" />
            <h3 className={css.petname}> {props.petName} </h3>
            <p className={css.info}> {props.locName} </p>
            <p onClick={() => setToggle(true)} className={css.link}> Reportar mascota </p>
    </div>
}