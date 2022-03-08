import { API_BASE_URL } from "../hooks";
const data = JSON.parse(localStorage.getItem("data"));

export async function signUpUser(email, password) {

    await fetch(API_BASE_URL + '/auth', {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    await console.log("Usuario registrado!");
}

export async function modifyUserInfo(oldEmail, newEmail?, password?) {

    await fetch(API_BASE_URL + "/user/data", {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${data["token"]}`,
        },
        body: JSON.stringify({ oldEmail: oldEmail, newEmail: newEmail, newPassword: password }),
    })
    await console.log("Se modificó la data");
}