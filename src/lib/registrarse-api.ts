import { API_BASE_URL } from "../hooks";

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

export async function modifyUserInfo(token, oldEmail, newEmail?, newPassword?) {

    await fetch(API_BASE_URL + "/user/data", {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`,
        },
        body: JSON.stringify({ oldEmail: oldEmail, newEmail: newEmail, newPassword: newPassword }),
    });
    await console.log("Se modificó la data");
    return true;
}