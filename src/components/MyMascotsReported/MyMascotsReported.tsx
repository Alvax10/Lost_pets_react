import { misMascotasReportadas } from "../../lib/mis-mascotas-reportadas-api";
import { useUserEmail, useToken, useGeoloc } from "../../hooks";
import { TextInfo } from "../../UI/Texto info/TextoInfo";
import { PinkButton } from "../../UI/buttons/PinkButton";
import React, { useEffect, useState } from "react";
import { EditCard } from "../EditCard/EditCard";
import { useNavigate } from "react-router-dom";
import css from "./MyMascotsReported.css";

export function MyMascotsReported(props) {

    const navigate = useNavigate();
    const [loc, setLoc] = useGeoloc();
    const [token, setToken] = useToken();
    const [email, setEmail] = useUserEmail();
    const [data, setData] = useState(null);

    const mascotasReportadas = async() => {
        const misMascotas = await misMascotasReportadas(email, token);
        await setData(misMascotas);
    }

    useEffect(() => {

        if (token == null) {
            navigate("/login");
            
        } else {
            mascotasReportadas();
        }
        return () => {
            // console.log("se paró el proceso de useEffect de misMascotas");
            setData(null);
        }
    }, []);

    function randomBetween(min, max) {
        return Math.ceil(Math.random() * (max - min) + min);
    }

    return ( data ? <div className={css["pre-container"]}>

            <h1 className={css.title}> Mis Mascotas reportadas </h1>
            <div className={css.container}>
                { data.map((m) => <EditCard  key={randomBetween(1,1000)} id={m["id"]} objectID={m["objectID"]} src={m["ImageDataURL"]} locName={m["_geoloc"]["name"]} petName={m["petName"]}></EditCard>)}
            </div>
        </div>
        :
        <div className={css["container-dos"]}>
            <TextInfo> No tienes mascotas reportadas </TextInfo>
            <PinkButton onClick={() => navigate("/reportar-mascota")}> Reportar Mascota </PinkButton>
        </div>
    );
}