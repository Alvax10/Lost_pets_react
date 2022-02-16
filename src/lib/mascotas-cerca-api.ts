import { API_BASE_URL } from "../hooks";

// OBTIENE LAS MASCOTAS QUE ESTÁN CERCA
export async function mascotsClose(lat, lng) {

    if (lat && lng) {
        const res = await fetch(API_BASE_URL + "/mascots-close-from" + "?lat=" + lat + "&lng=" + lng);
        const data = await res.json();
        return data;
    } else {
        return false;
    }
}