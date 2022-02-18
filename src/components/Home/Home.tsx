import css from "./Home.css";
import { CardComp } from "./Card";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { CustomTitle } from "../../UI/Title/Title";
import { PinkButton } from "../../UI/buttons/PinkButton";
import { TextInfo } from "../../UI/Texto info/TextoInfo";
import { mascotsClose } from "../../lib/mascotas-cerca-api";
import { _geoloc, useToken, useUserEmail, useUserData } from "../../hooks";

export function HomeComp() {
    
    const navigate = useNavigate();
    const userData = useUserData();
    const [token, setToken] = useToken();
    const [email, setEmail] = useUserEmail();
    const [data, setData] = useState(null);
    const loc = useRecoilValue(_geoloc);
    const { lat } = loc;
    const { lng } = loc;

    async function setMascotsClose() {
        const mascots = await mascotsClose(lat, lng);
        setData(mascots);
    }

    function goToReportMascot() {
        if (token) {
            navigate("/reportar-mascota");
        } else {
            navigate("/login");
        }
    }

    function randomBetween(min, max) {
        return Math.ceil(Math.random() * (max - min) + min);
    }

    useEffect(() => {
        if (data == null) {
            setMascotsClose();
        }
    }, [data]);

    return data ? 
    <div className={css.container}>
        <CustomTitle> Mascotas perdidas cerca tuyo </CustomTitle>
        <TextInfo> Bienvenid@ de vuelta { email } </TextInfo>
        { data.map((m) =>  <CardComp src={m["ImageDataURL"]} key={randomBetween(1,1000)} locName={m["_geoloc"]["name"]} petName={m["petName"]} ></CardComp> )}
    </div>
    :
    <div className={css.container}>
        <CustomTitle> Mascotas perdidas cerca tuyo </CustomTitle>
        <TextInfo> No hay mascotas perdidas cerca tuyo :D </TextInfo>
        <PinkButton onClick={goToReportMascot}> Reportar Mascota </PinkButton>
    </div>
}