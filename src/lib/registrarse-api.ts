import { API_BASE_URL , token } from "../hooks";

export async function signUpUser(email, password) {

    await fetch(API_BASE_URL + '/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    await console.log("Usuario registrado!");
}

export async function modifyUserInfo(password) {

    await fetch(API_BASE_URL + "/user/data", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`,
        },
        body: JSON.stringify({ password }),
    })
    console.log("Se modificó la data");
}