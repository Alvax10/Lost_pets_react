import { useState } from "react";
import { getMe } from "./lib/get-user-api";
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist();
import { atom, useRecoilState, selector, useRecoilValue } from "recoil";
// export const API_BASE_URL = "http://localhost:3011";
export const API_BASE_URL = "https://desafio-final-dwf-m7.herokuapp.com";


// ATOM DE TOKEN
export const token = atom({
    key: "token",
    default: null,
    effects_UNSTABLE: [persistAtom],
});

export const useToken = () => useRecoilState(token);

// ATOM DE _geoloc
export const _geoloc = atom({
    key: "itemState",
    default: {
        lat: null,
        lng: null
    },
    effects_UNSTABLE: [persistAtom],
});

export const useGeoloc = () => useRecoilState(_geoloc);

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
        const[token, setToken] = useToken();
        const myUserData = getMe(token);
        return myUserData;
    },
});

export const useUserData = () => useRecoilValue(userData);

// CUSTOM HOOKS QUE SE USAN A TRAVÉS DE LAS PÁGINAS (MENU OPEN Y REPORTAR/EDITAR MASCOTA)
export const useLocation = () => useState(null);
export const useToggle = () => useState(false);


