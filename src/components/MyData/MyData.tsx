import React, { useEffect } from "react";
import css from "./MyData.css";
import { useNavigate } from "react-router-dom";
import { useToken, useUserEmail } from "../../hooks";
import { CustomTitle } from "../../UI/Title/Title";
import { PinkButton } from "../../UI/buttons/PinkButton";
import { InputLabel } from "../../UI/InputLabel/InputLabel";
import { signUpUser, modifyUserInfo } from "../../lib/registrarse-api";

export function MyData() {

    const navigate = useNavigate();
    const [token, setToken] = useToken();
    const [email, setEmail] = useUserEmail();

    async function modifyUserData(e) {
        e.preventDefault();
        const password = e.target.password.value;
        const newEmail = e.target.newEmail.value;
        
        if (newEmail && password) {
            await modifyUserInfo(token, email, newEmail, password);
            await setEmail(newEmail);
            await navigate("/home");
            
        } else if (password && !newEmail) {
            await modifyUserInfo(token, email, password);
            await navigate("/home");

        } else if (newEmail && !password) {
            await modifyUserInfo(token, email, newEmail);
            await setEmail(newEmail);
            await navigate("/home");
        }
    }

    async function signUp(e) {
        e.preventDefault();
        const password = e.target.password.value;
        await signUpUser(email, password);
        await navigate("/login");
    }

    useEffect(() => {
        if (token == null) {
            navigate("/login");
        }
    },[]);

    return (token ? 
        <form onSubmit={modifyUserData} className={css.container}>
            <CustomTitle> Mis Datos / Registrarse </CustomTitle>
            <InputLabel label="Nombre" type="text" name="username" placeholder="Tu Nombre: " ></InputLabel>
            <InputLabel label="Nuevo email" type="text" name="newEmail" placeholder="Tu nuevo email: "></InputLabel>
            <InputLabel label="Contraseña" type="password" name="password" placeholder="Tu Contraseña: "></InputLabel>
            <InputLabel label="Repetir contraseña" type="password" name="password-2" placeholder="Repetir Contraseña: "></InputLabel>
            <PinkButton className={css.button}> Guardar </PinkButton>
        </form>
    :
        <form onSubmit={signUp} className={css.container}>
                <CustomTitle> Mis Datos </CustomTitle>
                <InputLabel label="Nombre" type="text" name="username" placeholder="Tu Nombre: " ></InputLabel>
                <InputLabel label="Contraseña" type="password" name="password" placeholder="Tu Contraseña: "></InputLabel>
                <InputLabel label="Repetir contraseña" type="password" name="password-2" placeholder="Repetir Contraseña: "></InputLabel>
                <PinkButton className={css.button}> Guardar </PinkButton>
        </form>
    );
}