import { API_BASE_URL , token } from "../hooks";

export async function misMascotasReportadas(email) {

    const allMascotsByAUser = await fetch(API_BASE_URL + "/user/reported-mascots" + "?email=" + email, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`,
        }
    });
    const data = await allMascotsByAUser.json();
    
    if (data) {
        return data;
        
    } else {
        return false;
    }
}