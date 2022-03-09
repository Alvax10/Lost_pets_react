import { API_BASE_URL } from "../hooks";
const data = JSON.parse(localStorage.getItem("data"));

// REPORTA UNA MASCOTA
export async function reportMascot(petName, _geoloc, ImageDataURL, email) {

    const res = await fetch(API_BASE_URL + "/report/mascot", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${data["token"]}`,
        },
        body: JSON.stringify({ petName, _geoloc, ImageDataURL, email }),
    });

    return true;
}