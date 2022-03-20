import React, { useState, useEffect } from "react";
import css from "./ReportMascot.css";
import { MapboxComp } from "../Mapbox/Mapbox";
import { useNavigate } from "react-router-dom";
import { MyDropZone } from "../DropZone/DropZone";
import { CustomTitle } from "../../UI/Title/Title";
import { PinkButton } from "../../UI/buttons/PinkButton";
import { GrayButton } from "../../UI/buttons/GrayButton";
import { reportMascot } from "../../lib/report-mascot-api";
import { InputLabel } from "../../UI/InputLabel/InputLabel";
import { useGeoloc, useImageDataURL, useToken, useUserEmail } from "../../hooks";

export function ReportMascotComp(props) {

    const navigate = useNavigate();
    const [email, setEmail] = useUserEmail();
    const [token, setToken] = useToken();
    const [img, setImg] = useImageDataURL();
    const [geoloc, setGeoloc] = useGeoloc()
    const [loc, setLoc] = useState({
        name: null,
        lat: null,
        lng: null,
    });
    const getLocation = (name, lat, lng) => {
        setLoc({
            name: name,
            lat: lat,
            lng: lng,
        });
    }

    async function reportarMascota(e) {
        e.preventDefault();
        await reportMascot(e.target["petname"].value, loc, img, email, token);
        await alert("Mascota reportada correctamente!");
        await navigate("/home");
    }

    useEffect(() => {
        if (geoloc == {lat: null, lng: null}) {
            navigate("/");
        } else if (token == null) {
            navigate("/login");
        } else if (geoloc == {lat: null, lng: null} && token == null) {
            navigate("/");
        }
    }, []);

    return <div className={css.container}>
        <CustomTitle> Reportar mascota perdida </CustomTitle>
        <form className={css.form} onSubmit={reportarMascota}>
            <InputLabel label="Nombre" type="text" name="petname" placeholder="Nombre de la mascota:" ></InputLabel>
            <MyDropZone></MyDropZone>
            <MapboxComp geoloc={getLocation}></MapboxComp>
            <PinkButton> Reportar mascota </PinkButton>
            <GrayButton onClick={() => navigate("/home")}> Cancelar </GrayButton>
        </form>
    </div>
}