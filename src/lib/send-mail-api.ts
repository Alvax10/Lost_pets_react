import { API_BASE_URL, token } from "../hooks";

// ENVIA EL MAIL AL USUARIO QUE PERDIÓ LA MASCOTA
export async function sendEmailto(petName, newLocation, userEmail, numeroDelUsuario) {

    const res = await fetch(API_BASE_URL + "/send-email-to-user", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`,
        },
        body: JSON.stringify({ userEmail, petName, newLocation, numeroDelUsuario }),
    });
    await console.log("Mail enviado!");
}