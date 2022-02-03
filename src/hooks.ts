import { useState, useEffect } from "react";
import { checkEmail, auth, mascotsClose } from "./lib/Login-api";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
export const API_BASE_URL = "https://desafio-final-dwf-m7.herokuapp.com";
export const token = localStorage.getItem("auth_token");

// ATOM DE _geoloc
export const _geoloc = atom({
    key: "itemState",
    default: {
        lat: null,
        lng: null
    },
});

// ATOM DE TOGGLE
export const toggle = atom({
    key: "toggle",
    default: false,
});
export const useToggle = () => useRecoilState(toggle);

// ATOM DE LOCATION BEFORE
export const locationBefore = atom({
    key: "Location before",
    default: "/home",
});

export const useLocationBefore = () => useRecoilState(locationBefore);

// ATOM DE USER EMAIL
export const userEmail = atom({
    key: "userEmail",
    default: "",
});

export const useUserEmail = () => useRecoilState(userEmail);

// ATOM DE ARRAY MASCOTS CLOSE
export const mascotsCloseFrom = atom({
    key: "mascotsCloseFrom",
    default: null,
});

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

// CUSTOM HOOK QUE RETORNA LAS MASCOTAS CERCA
export function getMascotsCloseFrom() {
    const loc = useRecoilValue(_geoloc);
    const setMascotsClose = useSetRecoilState(mascotsCloseFrom);
    const { lat } = loc;
    const { lng } = loc;

    const data = mascotsClose(lat, lng);
    setMascotsClose(data);

    return data;
}
