import axios from "axios";
import swal from "sweetalert";
import { IS_LOGGEDIN_URL } from "../redux/constants/urls";

export const userAuth = () => {
  const TOKEN = JSON.parse(window.localStorage.getItem("user"));
  if (TOKEN) {
    const config = { headers: { Authorization: `Bearer ${TOKEN}` } };
    return axios
      .get(`${IS_LOGGEDIN_URL}`, config)
      .then((response) => {
        if (response.request.status === 401) {
          swal({
            title: "Authentication failed",
            icon: "warning",
          });
          window.localStorage.removeItem("user");
          window.localStorage.removeItem("userInfo");
          return false;
        } else if (response.request.status === 200) {
          window.localStorage.setItem(
            "userInfo",
            JSON.stringify(response.data)
          );
          return true;
        }
      })
      .catch((error) => {
        console.log(error);
        swal({
          title: "System failed",
          icon: "warning",
        });
      });
  }
};
