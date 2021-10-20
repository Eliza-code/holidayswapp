import axios from "axios";
import swal from "sweetalert";
import * as types from "../types/favouriteTypes";


export function addAnnouncementFavourite(input) {
  return async function (dispatch) {
    try {
      const { data, request } = await axios.post(`/favourites`, input);
      if (request.status === 200) {
        dispatch({ type: types.POST_FAVOURITE });
        dispatch(getFavouriteId(input.userId));
      } else {
        return data?.error && swal({
            title: "Upsss! Something went wrong, please try again",
            icon: "warning",
        });
      }
    } catch (e) {
      console.error(e);
    }
  };
}


// export function getFavourite() {
//   return async function (dispatch) {
//     try {
//       const favourite = await axios.get(`/favourites/getAllFavourites`);
//       return dispatch({
//         type: types.GET_FAVOURITE,
//         payload: favourite.data,
//       });
//     } catch (error) {
//       console.log(error);
//       alert("Favourite not found");
//     }
//   };
// }

export function deleteFavourite(id) {
  //console.log(("delId", id));
  return async function (dispatch) {
    await axios.delete(`/favourites/deleteFavourite/${id}`);
    dispatch({ type: types.DELETE_FAVOURITE, payload: id });
    //console.log("Este es el id del actionfavouriteDelete: ",id)
  };
}

export function getFavouriteId(id) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`/favourites/getFavourite/${id}`);
      return dispatch({
        type: types.GET_FAVOURITE_ID,
        payload: data
      });
    } catch (error) {
      console.log(error);
      alert("Favourite not found");
    }
  };
}
