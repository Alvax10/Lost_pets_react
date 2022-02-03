import React from "react";
import { Login } from "../../components/Login/Login";
import { CustomTitle } from "../../UI/Title/Title";
import css from "./Login.css";

function LoginPage() {
    return (
        <div className={css.container}>
            <CustomTitle> Login Page </CustomTitle>
            <Login />
        </div>
    );
}

export { LoginPage };