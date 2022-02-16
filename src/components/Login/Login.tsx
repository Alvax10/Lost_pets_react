import React from "react";
import css from "./Login.css";
import { useUserEmail } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { checkEmail } from "../../lib/Login-api";
import { PinkButton } from "../../UI/buttons/PinkButton";
import { InputLabel } from "../../UI/InputLabel/InputLabel";

export function Login() {
    const navigate = useNavigate();
    const [userData, setUserEmail] = useUserEmail();
    
    async function submitHandler(e) {
        e.preventDefault();
        const email = e.target.email.value;
        // uso un atomo para recuperarlo en la siguiente pantalla
        setUserEmail(email);
        const response = await checkEmail(email);
        if (response) {
            navigate("/login/password");
        } else {
            navigate("/login/profile-data");
        }
    }

    return <form onSubmit={submitHandler} className={css.container}>
        <InputLabel className={css.input} type="email" label="Email" placeholder="Ej: blablabla@gmail.com" name="email"></InputLabel>
        <PinkButton> Siguiente </PinkButton>
    </form>
}
