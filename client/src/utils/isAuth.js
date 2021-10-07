import axios from 'axios';
import { IS_LOGGEDIN_URL } from '../redux/constants/urls';

export const isAuthenticated = (async () => {

    const TOKEN = JSON.parse(window.localStorage.getItem("user"))
    console.log("Soy TOKEN --> ", TOKEN)

    if (TOKEN !== null) {
        try {
            const { data } = await axios.get(IS_LOGGEDIN_URL, {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            })
            if (data) {
                window.localStorage.setItem("userInfo", JSON.stringify(data));
                return true;
            } else {
                console.log("Not authorized")
            }
        } catch (error) {
            console.error(error);
        }
    } else {
        return false;
    }
})()