import { APIURL } from "./constants"

export async function checkAuthentication() {
    try {
        const response = await fetch(`${APIURL}/auth/check/`, {
            method: "GET",
            credentials: "include",
        });
        if (response.status === 200) {
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }
}
