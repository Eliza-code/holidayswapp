import axios from "axios";


export function getHouses(name) {
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