import css from "./Home.css";
import { CardComp } from "./Card";
import { _geoloc } from "../../hooks";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { CustomTitle } from "../../UI/Title/Title";
import { PinkButton } from "../../UI/buttons/PinkButton";
import { TextInfo } from "../../UI/Texto info/TextoInfo";
import { mascotsClose } from "../../lib/mascotas-cerca-api";

export function HomeComp() {

    const [data, setData] = useState(null);
    const loc = useRecoilValue(_geoloc);
    const { lat } = loc;
    const { lng } = loc;
    
    async function setMascotsClose() {
        const mascots = await mascotsClose(lat, lng);
        setData(mascots);
    }

    // function randomBetween(min, max) {
    //     return Math.ceil(Math.random() * (max - min) + min);
    // }

    return ( data ?
        <div className={css.container}>
            <CustomTitle> Mascotas perdidas cerca tuyo </CustomTitle>
            { data.map((m) =>  <CardComp src={m["ImageDataURL"]} key={m["id"]} locName={m["_geoloc"]["name"]} petName={m["petName"]} ></CardComp> )}
        </div>
        : 
        <div className={css.container}>
            <CustomTitle> Mascotas perdidas cerca tuyo </CustomTitle>
            <TextInfo> No hay mascotas perdidas cerca tuyo :D </TextInfo>
            <Link className={css["link-to"]} to="/reportar-mascota">
                <PinkButton className={css.button}> Reportar Mascota </PinkButton>
            </Link>
        </div>
    );
}