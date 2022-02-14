import React, { useState } from "react";
import css from "./ReportMascot.css";
import { CustomTitle } from "../../UI/Title/Title";
import { InputLabel } from "../../UI/InputLabel/InputLabel";
import { MyDropZone } from "../DropZone/DropZone";
import { useImageDataURL } from "../../hooks";
import { MapboxComp } from "../Mapbox/Mapbox";
import { PinkButton } from "../../UI/buttons/PinkButton";
import { GrayButton } from "../../UI/buttons/GrayButton";
import { useNavigate } from "react-router-dom";
import { reportMascot } from "../../lib/report-mascot-api";

export const useLocationName = () => useState(null);
export const useGeoloc = () => useState(null);

export function ReportMascotComp() {
    const [img, setImg] = useImageDataURL();
    const [loc, setLoc] = useLocationName();
    const [geoloc, setGeoloc] = useGeoloc();
    const navigate = useNavigate();

    async function reportarMascota(e) {
        e.preventDefault();
        // navigate("/home");
        // setLoc(e.target["location"].value);
        console.log(e.target["petname"].value);
        console.log(img);
        console.log(geoloc);
        // await reportMascot(e.target["petname"].value, img, geoloc);
    }

    return <div className={css.container}>
        <CustomTitle> Reportar mascota perdida </CustomTitle>
        <form className={css.form}>
            <InputLabel label="Nombre" type="text" name="petname" placeholder="Nombre de la mascota:" ></InputLabel>
            <MyDropZone></MyDropZone>
            <MapboxComp></MapboxComp>
            <PinkButton onSubmit={reportMascot}> Reportar mascota </PinkButton>
            <GrayButton onClick={navigate("/home")}> Cancelar </GrayButton>
        </form>
    </div>
}