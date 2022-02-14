import css from "./Home.css";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useUserData, _geoloc, userDataSelector } from "../../hooks";
import { Link } from "react-router-dom";
import { mascotsClose } from "../../lib/mascotas-cerca-api";
import { CustomTitle } from "../../UI/Title/Title";
import { TextInfo } from "../../UI/Texto info/TextoInfo";
import { PinkButton } from "../../UI/buttons/PinkButton";
import { CardComp } from "./Card";

export function HomeComp() {
    const [data, setData] = useState(null);
    const [userData, setUserData] = useUserData();
    const loc = useRecoilValue(_geoloc);
    const { lat } = loc;
    const { lng } = loc;
    
    async function setMascotsClose() {
        const mascots = await mascotsClose(lat, lng);
        setData(mascots);
    }
    
    useEffect(() => {

        if (!data) {
            setData(false);

        } else if (mascotsClose.length > data.length ) {
            setMascotsClose();
        }
    }, [setMascotsClose]);

    // function randomBetween(min, max) {
    //     return Math.ceil(Math.random() * (max - min) + min);
    // }

    return ( data ?
        <div className={css.container}>
            <CustomTitle> Mascotas perdidas cerca tuyo </CustomTitle>
            { data.map((m) =>  <CardComp src={m["ImageDataURL"]} key={m["id"]} locName={m["_geoloc"]["name"]} petName={m["petName"]} ></CardComp> )}
            { data.map((m) =>  console.log(m) )}
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