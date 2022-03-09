import { API_BASE_URL } from "../hooks";
const data = JSON.parse(localStorage.getItem("data"));

// ENVIA EL MAIL AL USUARIO QUE PERDIÓ LA MASCOTA
export async function sendEmailto(petName, newLocation, userEmail, numeroDelUsuario) {

    const res = await fetch(API_BASE_URL + "/send-email-to-user", {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': `bearer ${data["token"]}`,
        },
        body: JSON.stringify({ userEmail, petName, newLocation, numeroDelUsuario }),
    });
    await res.json();
    await console.log("Mail enviado!");
}