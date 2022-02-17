import { API_BASE_URL, token } from "../hooks";

// REPORTA UNA MASCOTA
export async function reportMascot(petName, _geoloc, ImageDataURL, email) {

    const res = await fetch(API_BASE_URL + "/report/mascot", {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`,
        },
        body: JSON.stringify({ petName, _geoloc, ImageDataURL, email }),
    });

    return true;
}