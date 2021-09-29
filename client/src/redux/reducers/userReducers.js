const initialState =  {
    home: [],
    announcements: [{
       
    }]
}

const userReducer = (state=initialState, action) => {
    switch (action.type){
       case "GET_HOUSES":
           return {
               ...state,
               home: action.payload
           }
        case "ANNOUNCEMENTS":
            return {
                ...state,
                announcements: action.payload
            }
        
        default: 
        return state;
    }
}
 
export default userReducer;