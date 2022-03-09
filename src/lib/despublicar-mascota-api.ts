import { API_BASE_URL } from "../hooks";
const data = JSON.parse(localStorage.getItem("data"));

export async function eliminateMascot(mascotId, objectID) {

    await fetch(API_BASE_URL + "/eliminate-mascot", {
        method: 'DELETE',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': `bearer ${data["token"]}`,
        },
        body: JSON.stringify({ mascotId, objectID }),
    });
    await console.log("Mascota eliminada");
    return true;
}

export async function editMascotData(userId, petName, ImageDataURL, mascotLocation, mascotId, objectID) {

    const mascotaEditada = await fetch(API_BASE_URL + "/update-mascot-info", {
        method: 'PATCH',
        headers: {
            'mode': 'cors',
            'Access-Control-Allow-Origin': '*',
            "Content-type": "application/json",
            'Authorization': `bearer ${data["token"]}`,
        },
        body: JSON.stringify({ userId: userId, mascotId: mascotId, objectID: objectID, petName: petName, ImageDataURL: ImageDataURL, mascotLocation: mascotLocation }),
    });
    await console.log("Se actualizó la info! :D");
    return true;
}