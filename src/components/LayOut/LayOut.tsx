import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderPage } from "../Header/header";
import { useToggle } from "../Home/Card";

export function LayOut() {
    const [toggle, setToggle] = useToggle();
    
    return toggle ? <HeaderPage></HeaderPage>
    :
        <div>
            <HeaderPage></HeaderPage>
            <Outlet></Outlet>
        </div>
}