import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderPage } from "../UI/header";

export function LayOut() {

    return (
        <div>
            <HeaderPage></HeaderPage>
            <Outlet></Outlet>
        </div>
    );
}