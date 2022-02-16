import React, { useState } from "react";
import { EditCard } from "../EditCard/EditCard";
import { misMascotasReportadas } from "../../lib/mis-mascotas-reportadas-api";
import css from "./MyMascotsReported.css";
import { TextInfo } from "../../UI/Texto info/TextoInfo";
import { PinkButton } from "../../UI/buttons/PinkButton";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../../hooks";

export function MyMascotsReported(props) {

    const navigate = useNavigate();
    const [userData, setUserData] = useUserData();
    const [data, setData] = useState(null);

    async function mascotasReportadas() {
        const misMascotas = await misMascotasReportadas(userData["email"]);
        setData(misMascotas);
    }

    return (data ? <div className={css.container}>
            <h1 className={css.title}> Mis Mascotas reportadas </h1>
            { data.map((m) => <EditCard  key={m["id"]} objectID={m["objectID"]} src={m["ImageDataURL"]} locName={m["_geoloc"]["name"]} petName={m["petName"]}></EditCard>)}
        </div>
        :
        <div className={css.container}>
            <TextInfo> No tienes mascotas reportadas </TextInfo>
            <PinkButton onClick={() => navigate("/reportar-mascota")}> Reportar Mascota </PinkButton>
        </div>
    );
}