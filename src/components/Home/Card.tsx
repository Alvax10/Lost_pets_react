import css from "./Card.css";
import React, { useEffect, useState } from "react";
import closeButton from "../../assets/Vector.png";
import { InputLabel } from "../../UI/InputLabel/InputLabel";
import { PinkButton } from "../../UI/buttons/PinkButton";
import { sendEmailto } from "../../lib/send-mail-api";
import { useUserData } from "../../hooks";

export const useToggle = () => useState(false);

export function CardComp(props) {
    const [info, setInfo] = useState(null);
    const userData = useUserData;
    const [toggle, setToggle] = useToggle();
    console.log(toggle);

    function sendEmail(e) {
        e.preventDefault();
        setInfo({
            Name: e.target.username.value,
            phone_number: e.target.userphone.value,
            lastSeen: e.target.message.value
        });
        setToggle(false);
        sendEmailto(props.petName, info["lastSeen"], userData["email"], info["phone_number"]);
    }

    return toggle ? <div className={css.note}>
            <img src={closeButton} className={css["close-button"]} alt="Botón de cierre" onClick={() => setToggle(false)} />
            <h3 className={css["note-title"]}> Reportar info de {props.petName} </h3>
            <form onSubmit={sendEmail} className={css["form"]}>
                <InputLabel label="Nombre de usuario" type="text" name="username" placeholder="Ej: Alvaro" ></InputLabel>
                <InputLabel label="Número del usuario" type="number" name="userphone" placeholder="Ej: 3492123456" ></InputLabel>
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