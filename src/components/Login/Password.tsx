import React, { useState, useEffect } from "react";
import { useUserEmail, useAuth } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { InputLabel } from "../../UI/InputLabel/InputLabel";
import { PinkButton } from "../../UI/buttons/PinkButton";
import css from "./Login.css";
import { TextInfo } from "../../UI/Texto info/TextoInfo";
import { useLocationBefore } from "../../hooks";

function Password() {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useUserEmail();
    const [locBefore, setLocBefore] = useLocationBefore();
    const { login } = useAuth();

    async function submitHandler(e) {
        e.preventDefault();
        const password = e.target.password.value;
        const authRes = await login(userEmail, password);
        if (authRes) {
        console.log("login correcto");
        navigate(locBefore);
        }
    }

    const style = { 
        padding: 0,
    }

    return (
        <form className={css.container} onSubmit={submitHandler}>
            <TextInfo style={style} > Tu email es: {userEmail} </TextInfo>
            <InputLabel placeholder="Tu contraseña..." label="ingresá tu password:" type="password" name="password"></InputLabel>
            <PinkButton> Ingresar </PinkButton>
        </form>
    );
}

export { Password };