import React from "react";
import css from "./MyData.css";
import { useNavigate } from "react-router-dom";
import { token, useUserEmail } from "../../hooks";
import { CustomTitle } from "../../UI/Title/Title";
import { PinkButton } from "../../UI/buttons/PinkButton";
import { InputLabel } from "../../UI/InputLabel/InputLabel";
import { signUpUser, modifyUserInfo } from "../../lib/registrarse-api";

export function MyData() {

    const navigate = useNavigate();
    const [email, setEmail] = useUserEmail();

    async function modifyUserData(e) {
        e.preventDefault();
        const password = e.target.password.value;
        await modifyUserInfo(password);
    }

    async function signUp(e) {
        e.preventDefault();
        const password = e.target.password.value;
        await signUpUser(email, password);
        await navigate("/home");
    }

    return (token ? 
        <div onSubmit={modifyUserData} className={css.container}>
            <CustomTitle> Mis Datos </CustomTitle>
            <InputLabel label="Nombre" type="text" name="username" placeholder="Tu Nombre: " ></InputLabel>
            <InputLabel label="Contraseña" type="password" name="password" placeholder="Tu Contraseña: "></InputLabel>
            <InputLabel label="Repetir contraseña" type="password" name="password-2" placeholder="Repetir Contraseña: "></InputLabel>
            <PinkButton className={css.button}> Guardar </PinkButton>
        </div>
    :
        <div onSubmit={signUp} className={css.container}>
                <CustomTitle> Mis Datos </CustomTitle>
                <InputLabel label="Nombre" type="text" name="username" placeholder="Tu Nombre: " ></InputLabel>
                <InputLabel label="Contraseña" type="password" name="password" placeholder="Tu Contraseña: "></InputLabel>
                <InputLabel label="Repetir contraseña" type="password" name="password-2" placeholder="Repetir Contraseña: "></InputLabel>
                <PinkButton className={css.button}> Guardar </PinkButton>
        </div>
    );
}