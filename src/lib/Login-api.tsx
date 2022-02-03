import { API_BASE_URL } from "../hooks";

// chequea contra la api si existe
export async function checkEmail(email) {
    const res = await fetch(API_BASE_URL + "/verify/user", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    });

    const data = await res.json();
    return {
        exists: data,
    };
}

// obtiene un token
export async function auth(email, password) {

    const res = await fetch(API_BASE_URL + "/auth/token", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    const token = await res.json();
    
    return {
        token,
    };
}

// OBTIENE LAS MASCOTAS QUE ESTÁN CERCA
export async function mascotsClose(lat, lng) {

    if (lat && lng) {

        const res = await fetch(API_BASE_URL + "/mascots-close-from" + "?lat=" + lat + "&lng=" + lng);
        const data = await res.json();
        return data;
    } else {
        return "Falta la ubicación  !";
    }
}