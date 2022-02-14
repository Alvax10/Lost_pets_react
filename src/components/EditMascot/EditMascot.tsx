import css from "./EditMascot.css";
import React from "react";
import { CustomTitle } from "../../UI/Title/Title";
import { InputLabel } from "../../UI/InputLabel/InputLabel";
import { MyDropZone } from "../DropZone/DropZone";
import { useImageDataURL } from "../../hooks";
import { MapboxComp } from "../Mapbox/Mapbox";
import { PinkButton } from "../../UI/buttons/PinkButton";
import { useNavigate } from "react-router-dom";
import { GreenButton } from "../../UI/buttons/GreenButton";
import { useGeoloc } from "../ReportMascots/ReportMascot";
import { editMascotData, eliminateMascot } from "../../lib/despublicar-mascota-api";

export function EditMascot(props) {
    const navigate = useNavigate();
    const [img, setImg] = useImageDataURL();
    const [geoloc, setGeoloc] = useGeoloc();

    async function editMascot(e) {
        e.preventDefault();
        const petname = e.target.petname.value
        await editMascotData(petname, img, geoloc, props.key, props.objectID);
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
            <MapboxComp></MapboxComp>
            <PinkButton onSubmit={editMascot}> Guardar </PinkButton>
            <GreenButton onClick={despublicarMascota}> Reportar como encontrado </GreenButton>
            <p onClick={despublicarMascota}> Despublicar </p>
        </form>
    </div>
}