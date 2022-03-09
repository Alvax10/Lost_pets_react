import { API_BASE_URL } from "../hooks";
const dataStorage = JSON.parse(localStorage.getItem("data"));

export async function misMascotasReportadas(email) {

    const res = await fetch(API_BASE_URL + "/user/reported-mascots" + "?email=" + email, {
        method: 'GET',
        headers: {
            'mode': 'no-cors',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': `bearer ${dataStorage["token"]}`,
        }
    });
    const data = await res.json();
    if (data.length == 0) {
        return false;

    } else {
        return data;
    }
}