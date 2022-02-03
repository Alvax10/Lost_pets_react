import React from "react";
import { Password } from "../../components/Login/Password";
import { CustomTitle } from "../../UI/Title/Title";

export function PasswordPage() {
    return (
        <div>
            <CustomTitle> Password Page </CustomTitle>
            <Password />
        </div>
    );
}