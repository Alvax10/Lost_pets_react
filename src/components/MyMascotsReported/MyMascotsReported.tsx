import css from "./MyMascotsReported.css";
import { useNavigate } from "react-router-dom";
import { EditCard } from "../EditCard/EditCard";
import React, { useEffect, useState } from "react";
import { useUserEmail, useToken } from "../../hooks";
import { TextInfo } from "../../UI/Texto info/TextoInfo";
import { PinkButton } from "../../UI/buttons/PinkButton";
import { misMascotasReportadas } from "../../lib/mis-mascotas-reportadas-api";

export function MyMascotsReported(props) {

    const navigate = useNavigate();
    const [token, setToken] = useToken();
    const [email, setEmail] = useUserEmail();
    const [data, setData] = useState(null);

    const mascotasReportadas = async() => {
        const misMascotas = await misMascotasReportadas(email, token);
        setData(misMascotas);
    }

    useEffect(() => {
        if (data == null) {
            mascotasReportadas();
        }
    }, [data]);

    function randomBetween(min, max) {
        return Math.ceil(Math.random() * (max - min) + min);
    }

    return (data ? <div className={css.container}>
            <h1 className={css.title}> Mis Mascotas reportadas </h1>
            { data.map((m) => <EditCard  key={randomBetween(1,1000)} id={m["id"]} objectID={m["objectID"]} src={m["ImageDataURL"]} locName={m["_geoloc"]["name"]} petName={m["petName"]}></EditCard>)}
        </div>
        :
        <div className={css.container}>
            <TextInfo> No tienes mascotas reportadas </TextInfo>
            <PinkButton onClick={() => navigate("/reportar-mascota")}> Reportar Mascota </PinkButton>
        </div>
    );
}