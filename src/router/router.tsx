import React from "react";
import { Route, Routes } from "react-router-dom";
import { LayOut } from "../components/LayOut/LayOut";
import { MapboxComp } from "../components/Mapbox/Mapbox";
import { GiveLocation } from "../pages/GiveLocation/GiveLocation";
import { HomePage } from "../pages/Home/Home";
import { LoginPage } from "../pages/Login/Login";
import { PasswordPage } from "../pages/Login/Password";
import { MyDataPage } from "../pages/MyData/MyData";
import { ReportMascotPage } from "../pages/ReportarMascota/ReportMascot";
import { MyMascotsReportedPage } from "../pages/MyMascotsReported/MyMascotsReported";
import { EditMascotPage } from "../pages/EditarMascota/EditMascot";

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
                <Route path="/mis-datos" element={<MyDataPage />} />
                <Route path="/mis-mascotas" element={<MyMascotsReportedPage />} />
                <Route path="/reportar-mascota" element={<ReportMascotPage />} />
                <Route path="/editar-mascota" element={<EditMascotPage />} />
            </Route>
            <Route path="/test" element={<MapboxComp />}></Route>
        </Routes>
    );
}

export { AppRoutes };
