import React from "react";
import css from "./Login.css";
import { auth } from "../../lib/Login-api";
import { useNavigate } from "react-router-dom";
import { PinkButton } from "../../UI/buttons/PinkButton";
import { TextInfo } from "../../UI/Texto info/TextoInfo";
import { InputLabel } from "../../UI/InputLabel/InputLabel";
import { useUserEmail, useToken } from "../../hooks";

function Password() {
    const navigate = useNavigate();
    const [userToken, setUserToken] = useToken();
    const [userEmail, setUserEmail] = useUserEmail();
    
    async function submitHandler(e) {
        e.preventDefault();
        const password = e.target.password.value;
        const { token } = await auth(userEmail, password);
        if (token) {
            console.log("login correcto");
            await setUserToken(token);
            await navigate("/home");
        }
    }

    const style = { 
        padding: 0,
    }

    return (
        <form className={css.container} onSubmit={submitHandler}>
            <TextInfo style={style} > Tu email es: { userEmail } </TextInfo>
            <InputLabel placeholder="Tu contraseña..." label="ingresá tu password:" type="password" name="password"></InputLabel>
            <PinkButton> Ingresar </PinkButton>
        </form>
    );
}

export { Password };