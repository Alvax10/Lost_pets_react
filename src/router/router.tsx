import React from "react";
import { Route, Routes } from "react-router-dom";
import { LayOut } from "../components/LayOut/LayOut";
import { GiveLocation } from "../pages/GiveLocation/GiveLocation";
import { HomePage } from "../pages/Home/Home";
import { LoginPage } from "../pages/Login/Login";
import { MenuOpen } from "../components/MenuOpen/MenuOpen";
import { PasswordPage } from "../pages/Login/Password";

function AppRoutes() {

    return (
        <Routes>
            <Route element={<LayOut />}>
                <Route path="/" element={<GiveLocation />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/login">
                    <Route index element={<LoginPage />} /> 
                    <Route path="password" element={<PasswordPage />} />
                </Route>
                <Route path="/mis-datos" element={<HomePage />} />
                <Route path="/mis-mascotas" element={<HomePage />} />
                <Route path="/reportar-mascota" element={<HomePage />} />
            </Route>
            <Route path="/test" element={<MenuOpen />}></Route>
        </Routes>
    );
}

export { AppRoutes };
