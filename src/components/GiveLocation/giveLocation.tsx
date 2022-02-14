import React from "react";
import { PinkButton } from "../../UI/buttons/PinkButton";
import { TextInfo } from "../../UI/Texto info/TextoInfo";
import { CustomTitle } from "../../UI/Title/Title";
import css from "./giveLocation.css";
import { useNavigate } from "react-router-dom";
import { _geoloc } from "../../hooks";
import { useSetRecoilState } from "recoil";

export function ExtractLocation() {
    const navigate = useNavigate();
    const setLoc = useSetRecoilState(_geoloc);
    
    function handlerLoc(e) {
        e.preventDefault();

        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }

        function success(position) {
            var coord = position.coords;
            setLoc({ lat: coord.latitude, lng: coord.longitude });
            navigate("/home");
        }

        function error(err) {
            console.warn('ERROR(' + err.code + '): ' + err.message);
        }
        navigator.geolocation.getCurrentPosition(success, error, options);
    }

    return (
        <div className={css.container}>
            <CustomTitle> Mascotas perdidas cerca tuyo </CustomTitle>
            <TextInfo style={css["text-info"]}> Para ver las mascotas reportadas cerca tuyo necesitamos permiso para conocer tu ubicación. </TextInfo>
            <PinkButton className={css.button} onClick={handlerLoc}> Dar mi ubicación </PinkButton>
        </div>
    );
}