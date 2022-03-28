import css from "./EditCard.css";
import React, { useState, useEffect } from "react";
import { MapboxComp } from "../Mapbox/Mapbox";
import { useNavigate } from "react-router-dom";
import { MyDropZone } from "../DropZone/DropZone";
import closeButton from "../../assets/Vector.png";
import lapizEdit from "../../assets/lapiz-edit.png";
import { PinkButton } from "../../UI/buttons/PinkButton";
import { InputLabel } from "../../UI/InputLabel/InputLabel";
import { useImageDataURL, useToken } from "../../hooks";
import { editMascotData, eliminateMascot } from "../../lib/despublicar-mascota-api";

export function EditCard(props) {
    const navigate = useNavigate();
    const [token, setToken] = useToken();
    const [toggle, setToggle] = useState(false);

    const [img, setImg] = useImageDataURL();
    const [geoloc, setGeoloc] = useState(null);
    const location = (name, lat, lng) => {
        setGeoloc({
            name: name,
            lat: lat,
            lng: lng,
        });
    }

    async function editMascot(e) {
        e.preventDefault();
        const petName = e.target.name.value;

        await editMascotData(token, props.id, props.objectID, petName, img, geoloc);
        await alert("Mascota editada correctamente!");
        await navigate("/home");
    }

    async function despublicarMascota(e) {
        e.preventDefault();
        await eliminateMascot(props.id, props.objectID, token);
        await alert("Mascota despublicada correctamente!");
        await navigate("/home");
    }

    return toggle ? <div className={css.note}>
            <img src={closeButton} className={css["close-button"]} alt="Botón de cierre" onClick={() => setToggle(false)} />
            <h3 className={css["note-title"]}> Editar info de {props.petName} </h3>
            <form onSubmit={editMascot} className={css["form"]}>
                <InputLabel label="Nombre" type="text" name="petname" placeholder={`Nombre de la mascota: ${props.petName}`} ></InputLabel>
                <MyDropZone></MyDropZone>
                <MapboxComp geoloc={location}></MapboxComp>
                <PinkButton> Guardar </PinkButton>
                <div className={css["green-button"]} onClick={despublicarMascota}> Reportar como encontrado </div>
                <p className={css.despublicar} onClick={despublicarMascota}> Despublicar </p>
            </form>
        </div>
    :
    <div className={css.card}>
        <img className={css.img} src={props.src} alt="Imagen de la mascota" />
        <h3 className={css.petname}> {props.petName} </h3>
        <p className={css.info}> {props.locName} </p>
        <img alt="Lápiz" onClick={() => setToggle(true)} src={lapizEdit} className={css.edit} />
    </div>
}