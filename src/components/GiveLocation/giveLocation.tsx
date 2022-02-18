import React from "react";
import css from "./giveLocation.css";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { CustomTitle } from "../../UI/Title/Title";
import { TextInfo } from "../../UI/Texto info/TextoInfo";
import { PinkButton } from "../../UI/buttons/PinkButton";
import { _geoloc, useUserData, useUserEmail, useToken } from "../../hooks";
export const localStorageToken = localStorage.getItem("token");

export function ExtractLocation() {

    const navigate = useNavigate();
    const userData = useUserData();
    const [token, setToken] = useToken();
    const [email, setEmail] = useUserEmail();
    const setLoc = useSetRecoilState(_geoloc);
    
    if (userData) {
        setEmail(userData["email"]);
    }
    
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