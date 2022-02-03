import React from "react";
import { Link } from "react-router-dom";
import { PinkButton } from "../../UI/buttons/PinkButton";
import { TextInfo } from "../../UI/Texto info/TextoInfo";
import { CustomTitle } from "../../UI/Title/Title";
import css from "./Home.css";
import { getMascotsCloseFrom } from "../../hooks";

export function HomeComp() {
    const mascotas = getMascotsCloseFrom();

    return ( mascotas ?
        <div> 
            { console.log(mascotas) }
        </div>
        : 
        <div className={css.container}>
            <CustomTitle> Mascotas perdidas cerca tuyo </CustomTitle>
            <TextInfo> No hay mascotas perdidas cerca tuyo :D </TextInfo>
            <Link className={css["link-to"]} to="/reportar-mascota">
                <PinkButton> Reportar Mascota </PinkButton>
            </Link>
        </div>
    );
}