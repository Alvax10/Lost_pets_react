import { API_BASE_URL } from "../hooks";

// OBTIENE LA DATA DEL USER VINCULADA AL TOKEN
export async function getMe(token) {

    const res = await fetch(API_BASE_URL + "/me", {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
            'Authorization': `bearer ${token}`,
        }
    });
    const myUserData = await res.json();
    return myUserData;
}