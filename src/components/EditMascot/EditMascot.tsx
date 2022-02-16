import React, { useState } from "react";
import css from "./EditMascot.css";
import { MapboxComp } from "../Mapbox/Mapbox";
import { useNavigate } from "react-router-dom";
import { MyDropZone } from "../DropZone/DropZone";
import { CustomTitle } from "../../UI/Title/Title";
import { PinkButton } from "../../UI/buttons/PinkButton";
import { useImageDataURL } from "../../hooks";
import { GreenButton } from "../../UI/buttons/GreenButton";
import { InputLabel } from "../../UI/InputLabel/InputLabel";
import { editMascotData, eliminateMascot } from "../../lib/despublicar-mascota-api";

export function EditMascot(props) {
    const navigate = useNavigate();
    const [img, setImg] = useImageDataURL();
    const [geoloc, setGeoloc] = useState({
        name: null,
        lat: null,
        lng: null,
    });
    const location = (name, lat, lng) => {
        setGeoloc({
            name: name,
            lat: lat,
            lng: lng,
        });
    }

    async function editMascot(e) {
        e.preventDefault();
        const petname = e.target.petname.value
        await navigate("/home");
    }

    async function despublicarMascota(e) {
        e.preventDefault();
        await eliminateMascot(props.key, props.objectID);
        await navigate("/home");
    }

    return <div className={css.container}>
        <CustomTitle> Editar mascota perdida </CustomTitle>
        <form onSubmit={editMascot} className={css.form}>
            <InputLabel label="Nombre" type="text" name="petname" placeholder="Nombre de la mascota:" ></InputLabel>
            <MyDropZone></MyDropZone>
            <MapboxComp geoloc={location}></MapboxComp>
            <PinkButton onSubmit={editMascot}> Guardar </PinkButton>
            <GreenButton onClick={despublicarMascota}> Reportar como encontrado </GreenButton>
            <p onClick={despublicarMascota}> Despublicar </p>
        </form>
    </div>
}