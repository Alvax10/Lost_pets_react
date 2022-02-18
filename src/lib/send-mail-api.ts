import { API_BASE_URL } from "../hooks";

// ENVIA EL MAIL AL USUARIO QUE PERDIÓ LA MASCOTA
export async function sendEmailto(petName, newLocation, userEmail, numeroDelUsuario, token) {

    const res = await fetch(API_BASE_URL + "/send-email-to-user", {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`,
        },
        body: JSON.stringify({ userEmail, petName, newLocation, numeroDelUsuario }),
    });
    await res.json();
    await console.log("Mail enviado!");
}