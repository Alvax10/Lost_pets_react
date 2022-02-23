import { API_BASE_URL } from "../hooks";

// OBTIENE LAS MASCOTAS QUE ESTÁN CERCA
export async function mascotsClose(lat, lng) {

    const res = await fetch(API_BASE_URL + "/mascots-close-from" + "?lat=" + lat + "&lng=" + lng, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
    });
    const data = await res.json();
    
    if (data.length > 1) {
        return data;

    } else {
        return false;
    }
}