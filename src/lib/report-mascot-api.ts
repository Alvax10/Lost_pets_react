import { API_BASE_URL } from "../hooks";

// REPORTA UNA MASCOTA
export async function reportMascot(petName, _geoloc, ImageDataURL, email, token) {

    const res = await fetch(API_BASE_URL + "/report/mascot", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`,
        },
        body: JSON.stringify({ petName, _geoloc, ImageDataURL, email }),
    });

    return true;
}