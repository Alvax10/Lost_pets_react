import React from "react";
import { useUserData } from "../../hooks";
import { checkEmail } from "../../lib/Login-api";
import { useNavigate } from "react-router-dom";
import { PinkButton } from "../../UI/buttons/PinkButton";
import css from "./Login.css";
import { InputLabel } from "../../UI/InputLabel/InputLabel";

function Login() {
    const navigate = useNavigate();
    const [userData, setUserData] = useUserData();
    
    async function submitHandler(e) {
        e.preventDefault();
        const email = e.target.email.value;

        // uso un atomo para recuperarlo en la siguiente pantalla
        setUserData(userData["email"]);
        const response = await checkEmail(email);
        if (response.exists) {
            navigate("/login/password");
        } else {
            navigate("/login/profile-data");
        }
    }

    return (<form onSubmit={submitHandler} className={css.container}>
            <InputLabel className={css.input} type="email" label="Email" placeholder="Ej: blablabla@gmail.com" name="email"></InputLabel>
            <PinkButton> Siguiente </PinkButton>
        </form>
    );
}

export { Login };