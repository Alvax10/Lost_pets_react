import React from "react";
import css from "./Login.css";
import { useNavigate } from "react-router-dom";
import { useLocationBefore } from "../../hooks";
import { PinkButton } from "../../UI/buttons/PinkButton";
import { TextInfo } from "../../UI/Texto info/TextoInfo";
import { InputLabel } from "../../UI/InputLabel/InputLabel";
import { useUserData, useUserEmail } from "../../hooks";

function Password() {
    const navigate = useNavigate();
    const userData = useUserData();
    const [userEmail, setUserEmail] = useUserEmail();
    const [locBefore, setLocBefore] = useLocationBefore();

    async function submitHandler(e) {
        e.preventDefault();
        const password = e.target.password.value;
        if (password) {
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