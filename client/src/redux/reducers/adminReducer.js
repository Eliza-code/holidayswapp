import * as types from "../types/adminTypes.js";

const initialState = {
    allUsers: [],
    allAnnouncements: []
}

const adminReducer = ( state = initialState, action ) => {
    switch (action.type){

        case types.GET_ALL_USERS:
            return {
                ...state,
                allUsers: action.payload
            }
        case types.GET_ALL_ANNOUNCEMENTS:
            return{
                ...state,
                allAnnouncements: action.payload
            }
        case types.DELETE_USER:
            return {
                ...state,
            }
        case types.DELETE_ANNOUNCEMENT:
            return {
                ...state,
            }
            
        default:
            return state;
    }
}

export default adminReducer;