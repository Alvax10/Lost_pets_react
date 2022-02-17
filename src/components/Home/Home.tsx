import css from "./Home.css";
import { CardComp } from "./Card";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { CustomTitle } from "../../UI/Title/Title";
import { PinkButton } from "../../UI/buttons/PinkButton";
import { TextInfo } from "../../UI/Texto info/TextoInfo";
import { mascotsClose } from "../../lib/mascotas-cerca-api";
import { _geoloc, token, useUserData, useUserEmail } from "../../hooks";

export function HomeComp() {
    
    const navigate = useNavigate();
    const userData = useUserData();
    const [email, setEmail] = useUserEmail();
    const [data, setData] = useState(null);
    const loc = useRecoilValue(_geoloc);
    const { lat } = loc;
    const { lng } = loc;
    
    async function setMascotsClose() {
        const mascots = await mascotsClose(lat, lng);
        setData(mascots);
    }
    
    if (token) {
        console.log(token);
        setEmail(userData["email"]);
    }

    useEffect(() => {
        if (data == null) {
            setMascotsClose();
        }
    }, [data]);

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

    if (data && userData) {

        return <div className={css.container}>
            <CustomTitle> Mascotas perdidas cerca tuyo </CustomTitle>
            <TextInfo> Bienvenid@ de vuelta {email}</TextInfo>
            { data.map((m) =>  <CardComp src={m["ImageDataURL"]} key={randomBetween(1,1000)} locName={m["_geoloc"]["name"]} petName={m["petName"]} ></CardComp> )}
        </div>
    } else if (data) {

        return <div className={css.container}>
            <CustomTitle> Mascotas perdidas cerca tuyo </CustomTitle>
            { data.map((m) =>  <CardComp src={m["ImageDataURL"]} key={m["id"]} locName={m["_geoloc"]["name"]} petName={m["petName"]} ></CardComp> )}
        </div>

    } else if (userData) {

        return <div className={css.container}>
            <CustomTitle> Mascotas perdidas cerca tuyo </CustomTitle>
            <TextInfo> Bienvenid@ de vuelta {email}</TextInfo>
            <TextInfo> No hay mascotas perdidas cerca tuyo :D </TextInfo>
            <PinkButton onClick={goToReportMascot} className={css.button}> Reportar Mascota </PinkButton>
        </div>
    }
}