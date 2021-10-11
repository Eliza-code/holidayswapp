export const BASE_URL = "http://localhost:3001";
export const ANNOUNCEMENT_URL = `${BASE_URL}/announcement`;
export const SIGN_IN_URL = `${BASE_URL}/auth/login`;
export const SIGN_UP_URL = `${BASE_URL}/user`;
export const HOUSE_CITY_URL = `${ANNOUNCEMENT_URL}?name=`
export const SIGN_OUT_URL = `${BASE_URL}/auth/logout`;
export const IS_LOGGEDIN_URL = `${BASE_URL}/auth/profile`;
export const OWNER_ID_URL = `${BASE_URL}/user/getUser`;
export const POST_ANNOUNCEMENT_URL = `${BASE_URL}/announcement`;
export const POST_FAVOURITE_URL = `${BASE_URL}/favourite/createFavourite`;
export const FAVOURITE_URL = `${BASE_URL}/favourite/getAllFavourites`;
export const DELETE_FAVOURITE_URL = `${BASE_URL}/favourite/deleteFavourite`;
export const REVIEW_ID_URL = `${BASE_URL}/review/getAnnouncement`;
export const ORDERS_GET_BY_ID_URL = `${BASE_URL}/order/getOrderById/:orderId`;
export const POST_REVIEW_URL = `${BASE_URL}/review/`;
 
