import { API_BASE_URL , token } from "../hooks";

export async function misMascotasReportadas(email) {

    const allMascotsByAUser = await fetch(API_BASE_URL + "/user/reported-mascots" + "?email=" + email, {
        method: 'GET',
        headers: {
            'Authorization': `bearer ${token}`,
        }
    });
    const data = await allMascotsByAUser.json();
    
    if (data) {
        console.log("Esta es la data de todas las mascotas reportadas por un usuario: ", data);
        return data;
        
    } else {
        return false;
    }
}