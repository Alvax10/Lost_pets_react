import { API_BASE_URL , token } from "../hooks";

export async function eliminateMascot(mascotId, objectID) {

    await fetch(API_BASE_URL + "/eliminate-mascot", {
        method: 'DELETE',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`,
        },
        body: JSON.stringify({ mascotId, objectID }),
    });
    await console.log("Mascota eliminada");
    return true;
}

export async function editMascotData(petName, petPhoto, mascotLocation, mascotId, objectID) {

    await fetch(API_BASE_URL + "/update-mascot-info", {
        method: 'PATCH',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`,
        },
        body: JSON.stringify({ mascotId: mascotId, objectID: objectID, petName: petName, petPhoto: petPhoto, mascotLocation: mascotLocation }),
    });
    await console.log("Se actualizó la info! :D");
    return true;
}