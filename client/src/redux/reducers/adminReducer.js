import * as types from "../types/adminTypes.js";

const initialState = {
    allUsers: [],
    allAnnouncements: [],
    adminChangeStatus: null
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
        case types.ADMIN_CHANGE_STATUS_SUCCESS:
            return{
                ...state,
                adminChangeStatus: action.payload
            }
            
        default:
            return state;
    }
}

export default adminReducer;