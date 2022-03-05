import React, { useEffect } from "react";
import css from "./giveLocation.css";
import { useNavigate } from "react-router-dom";
import { CustomTitle } from "../../UI/Title/Title";
import { TextInfo } from "../../UI/Texto info/TextoInfo";
import { PinkButton } from "../../UI/buttons/PinkButton";
import { useUserData, useUserEmail, useToken, useGeoloc } from "../../hooks";
const data = JSON.parse(localStorage.getItem("data"));

export function ExtractLocation() {

    const navigate = useNavigate();
    const userData = useUserData();
    const [geoloc, setGeoloc] = useGeoloc();
    const [token, setToken] = useToken();
    const [email, setEmail] = useUserEmail();
    
    useEffect(() => {
        if (userData && !email) {
            setEmail(userData["email"]);
        }
        if (data["_geoloc"]) {
            console.log("Ya hay loc: ", data["_geoloc"]);
            setGeoloc({ lat: data["_geoloc"]["lat"], lng: data["_geoloc"]["lng"] });
            navigate("/home");
        }

    }, [token, geoloc]);

    
    function handlerLoc(e) {
        e.preventDefault();

        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }

        function success(position) {
            var coord = position.coords;
            setGeoloc({ lat: coord.latitude, lng: coord.longitude });
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