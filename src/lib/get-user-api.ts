import { API_BASE_URL, token } from "../hooks";

// OBTIENE LA DATA DEL USER VINCULADA AL TOKEN
export async function getMe() {

    const res = await fetch(API_BASE_URL + "/me", {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `bearer ${token}`,
            'Content-type': 'application/json',
        }
    });
    const userData = await res.json();
    return userData;
}