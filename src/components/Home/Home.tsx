import css from "./Home.css";
import { CardComp } from "../Card/Card";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { CustomTitle } from "../../UI/Title/Title";
import { PinkButton } from "../../UI/buttons/PinkButton";
import { TextInfo } from "../../UI/Texto info/TextoInfo";
import { mascotsClose } from "../../lib/mascotas-cerca-api";
import { useToken, useUserEmail, useGeoloc } from "../../hooks";

export function HomeComp() {
    
    const navigate = useNavigate();
    const [token, setToken] = useToken();
    const [email, setEmail] = useUserEmail();
    const [data, setData] = useState(null);
    const [loc, setLoc] = useGeoloc();
    const { lat } = loc;
    const { lng } = loc;

    const setMascotsClose = async() => {
        const mascots = await mascotsClose(lat, lng);
        await setData(mascots);
    }

    useEffect(() => {

        if (lat == null && lng == null) {
            // console.log(lat, lng);
            navigate("/");

        } else {
            setMascotsClose();
        }
        return () => {
            // console.log("Unmouting se paró el proceso de useEffect de mascotasCerca");
            setData(null);
        }
    }, []);

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

    return (data && token) ?
        
        <div>
            <CustomTitle> Mascotas perdidas cerca tuyo </CustomTitle>
            <TextInfo> Bienvenid@ de vuelta { email } </TextInfo>
            <div className={css.container}>
                { data.map((m) =>  <CardComp src={m["ImageDataURL"]} key={randomBetween(1,1000)} locName={m["_geoloc"]["name"]} petName={m["petName"]} ></CardComp> )}
            </div>
        </div>
        : (!data && token) ?
        <div className={css["container-dos"]}>
            <CustomTitle> Mascotas perdidas cerca tuyo </CustomTitle>
            <TextInfo> Bienvenid@ de vuelta { email } </TextInfo>
            <TextInfo> No hay mascotas perdidas cerca tuyo :D </TextInfo>
            <PinkButton onClick={goToReportMascot}> Reportar Mascota </PinkButton>
        </div>
        : (data && !token) ?

        <div>
            <CustomTitle> Mascotas perdidas cerca tuyo </CustomTitle>
            <div className={css.container}>
                { data.map((m) =>  <CardComp src={m["ImageDataURL"]} key={randomBetween(1,1000)} locName={m["_geoloc"]["name"]} petName={m["petName"]} ></CardComp> )}
            </div>
        </div>
        :
        <div className={css["container-dos"]}>
            <CustomTitle> Mascotas perdidas cerca tuyo </CustomTitle>
            <TextInfo> No hay mascotas perdidas cerca tuyo :D </TextInfo>
            <PinkButton onClick={goToReportMascot}> Reportar Mascota </PinkButton>
        </div>
}