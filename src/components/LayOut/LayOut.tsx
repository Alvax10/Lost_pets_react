import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToken, useUserEmail, useGeoloc } from "../../hooks";
import { HeaderPage } from "../Header/header";

export function LayOut(props) {

    const navigate = useNavigate();
    const [token, setToken] = useToken();
    const [loc, setLoc] = useGeoloc();
    const [email, setEmail] = useUserEmail();

    useEffect(() => {
        if (loc == null) {
            navigate("/");
        }
        if (token == null && email == null) {
            navigate("/login");
        }
    },[])

    return <HeaderPage></HeaderPage>
}