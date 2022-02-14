import { auth, getMe } from "./lib/Login-api";
import { atom, useRecoilState, selector, useRecoilValue } from "recoil";
export const API_BASE_URL = "https://desafio-final-dwf-m7.herokuapp.com";
export const token = localStorage.getItem("auth_token");
// import { reportMascot } from "./lib/report-mascot-api";
// import { sendEmailto } from "./lib/send-mail-api";

// ATOM DE _geoloc
export const _geoloc = atom({
    key: "itemState",
    default: {
        lat: null,
        lng: null
    },
});

// ATOM DE USERDATA
// export const dataDelUsuario = atom({
//     key: "dataDelUsuario",
//     default: {
//         id: null,
//         email: null
//     },
// });

// ATOM DE ImageDataURL
export const ImageDataURL = atom({
    key: "ImageDataURL",
    default: null
});

export const useImageDataURL = () => useRecoilState(ImageDataURL);

// ATOM DE USERDATA
export const userData = atom({
    key: "userData",
    default: {
        email: null,
        id: null
    }
});

export const useUserData = () => useRecoilState(userData);

// ATOM DE LOCATION BEFORE
export const locationBefore = atom({
    key: "Location before",
    default: "/home",
});

export const useLocationBefore = () => useRecoilState(locationBefore);


export const userDataSelector = selector({
    key: "userDataSelector",
    get: async ({ get }) => {
        const myUserData = await getMe();
        const [userData, setUserData] = useUserData();
        
        setUserData({ email: myUserData["email"], id: myUserData["id"] });
        return myUserData;
    },
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
