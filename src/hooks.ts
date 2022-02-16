import { useState } from "react";
import { getMe, auth } from "./lib/Login-api";
export const token = localStorage.getItem("auth_token");
import { atom, useRecoilState, selector, useRecoilValue } from "recoil";
import { reportMascot } from "./lib/report-mascot-api";
export const API_BASE_URL = "https://desafio-final-dwf-m7.herokuapp.com";

// ATOM DE _geoloc
export const _geoloc = atom({
    key: "itemState",
    default: {
        lat: null,
        lng: null
    },
});

// ATOM DE ImageDataURL
export const ImageDataURL = atom({
    key: "ImageDataURL",
    default: null
});

export const useImageDataURL = () => useRecoilState(ImageDataURL);

// ATOM DE USERDATA
export const userEmail = atom({
    key: "userEmail",
    default: null
});

export const useUserEmail = () => useRecoilState(userEmail);

// ATOM DE LOCATION BEFORE
export const locationBefore = atom({
    key: "Location before",
    default: "/home",
});

export const useLocationBefore = () => useRecoilState(locationBefore);


export const userData = selector({
    key: "userData",
    get: async ({ get }) => {
        const myUserData = getMe();
        console.log(myUserData);
        return myUserData;
    },
});

export const useUserData = () => useRecoilValue(userData);

// FUNCIÓN QUE PERMITE LOGUEARTE Y GURADA TU TOKEN
export function useAuth() {
    async function login(email, pass) {
        try {
            const { token } = await auth(email, pass);
            localStorage.setItem("auth_token", token);
            return true;
        } catch (e) {
            console.error("user o password incorrecto");
        }
    }
    return { login };
}

// REPORTAR MASCOTAS
export function useReportMascot() {
    async function report(petName, ImageDataURL, _geoloc, email) {
        try {
            await reportMascot(petName, ImageDataURL, _geoloc, email);
            await console.log("Mascota reportada!");
        } catch (e) {
            console.error("Error de reportar mascota: ", e);
        }
    }
    return { report };
}

// REGISTRARSE
// await signUpUser(userData["email"], password);

// INICIAR SESIÓN
// const authRes = await auth(userData["email"], password);

// EDITAR MASCOTAS
// await editMascotData(petname, img, geoloc, props.key, props.objectID);


// CUSTOM HOOKS QUE SE USAN A TRAVÉS DE LAS PÁGINAS
export const useLocation = () => useState(null);
export const useToggle = () => useState(false);