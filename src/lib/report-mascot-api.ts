import { API_BASE_URL, token, useUserData } from "../hooks";

// REPORTA UNA MASCOTA
export async function reportMascot(petName, ImageDataURL, _geoloc) {

    const userData = useUserData();
    const res = await fetch(API_BASE_URL + "/report/mascot", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`,
        },
        body: JSON.stringify({ petName: petName, _geoloc: _geoloc, ImageDataURL: ImageDataURL, email: userData["email"] }),
    });
    await res.json();
    await console.log("Mascota reportada!");
}