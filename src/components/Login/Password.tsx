import React from "react";
import css from "./Login.css";
import { auth } from "../../lib/Login-api";
import { useUserEmail, useUserData } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { PinkButton } from "../../UI/buttons/PinkButton";
import { TextInfo } from "../../UI/Texto info/TextoInfo";
import { InputLabel } from "../../UI/InputLabel/InputLabel";

function Password() {
    const navigate = useNavigate();
    const userData = useUserData();
    const [userEmail, setUserEmail] = useUserEmail();
    
    async function submitHandler(e) {
        e.preventDefault();
        const password = e.target.password.value;
        const authRes = await auth(userEmail, password);
        if (authRes) {
            console.log(userData);
            console.log("login correcto");
            navigate("/home");
        }
    }

    const style = { 
        padding: 0,
    }

    return (
        <form className={css.container} onSubmit={submitHandler}>
            <TextInfo style={style} > Tu email es: {userEmail}, id: {userData["id"]} </TextInfo>
            <InputLabel placeholder="Tu contraseña..." label="ingresá tu password:" type="password" name="password"></InputLabel>
            <PinkButton> Ingresar </PinkButton>
        </form>
    );
}

export { Password };