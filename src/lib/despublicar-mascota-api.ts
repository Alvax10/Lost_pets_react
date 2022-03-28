import { API_BASE_URL } from "../hooks";

export async function eliminateMascot(mascotId, objectID, token) {

    await fetch(API_BASE_URL + "/eliminate-mascot", {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`,
        },
        body: JSON.stringify({ mascotId, objectID }),
    });
    await console.log("Mascota eliminada");
    return true;
}

export async function editMascotData(token, ImageDataURL, mascotId, mascotLocation, objectID, petName) {

    const mascotaEditada = await fetch(API_BASE_URL + "/update-mascot-info", {
        method: 'PATCH',
        headers: {
            "Content-type": "application/json",
            'Authorization': `bearer ${token}`,
        },
        body: JSON.stringify({ ImageDataURL: ImageDataURL, mascotId: mascotId, mascotLocation: mascotLocation, objectID: objectID, petName: petName }),
    });
    await console.log("Se actualizó la info! :D");
    return mascotaEditada;
}