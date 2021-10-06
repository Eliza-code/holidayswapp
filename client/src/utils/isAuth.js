import {IS_LOGGEDIN_URL} from '../redux/constants/urls';
import axios from 'axios';

export const isAuthenticated = async () => {

    const TOKEN = window.localStorage.getItem("user")

    if (TOKEN) {
        try {
            const { data } = await axios.get(IS_LOGGEDIN_URL, {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            })
            console.log(data)
            if (data) return true;
        } catch (error) {
            console.error(error);
        }
    } else {
        return false;
    }
}