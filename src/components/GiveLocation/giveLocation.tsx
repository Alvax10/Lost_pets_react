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
        if (geoloc == {lat: null, lng: null}) {
            navigate("/");
        } else if (token == null) {
            navigate("/login");
        } else if (geoloc == {lat: null, lng: null} && token == null) {
            navigate("/");
        } else {
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
            <TextInfo style={css["text-info"]}> Esta página sirve para reportar y encontrar mascotas perdidas cerca de tu área. </TextInfo>
            <TextInfo style={css["text-info"]}> Para ver las mascotas reportadas cerca tuyo necesitamos permiso para conocer tu ubicación. </TextInfo>
            <PinkButton className={css.button} onClick={handlerLoc}> Dar mi ubicación </PinkButton>
        </div>
    );
}