import axios from "axios";


export function getHouses() {
    return async function (dispatch) {
      try {
        var json = ""   
        return dispatch({
          type: "GET_HOUSES",
          payload: json.data,
        });
      } catch (error) {
        console.log(error);
        alert("ciudad o pais no encontrado");
      }
    };
  }

export function Announcements(payload) {
  return {
    type: "ANNOUNCEMENTS",
    payload
  }
}
