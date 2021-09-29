const initialState =  {
    home: []
}

const userReducer = (state=initialState, action) => {
    switch (action.type){
       case "GET_HOUSES":
           return {
               ...state,
               home: action.payload
           }
        
        default: 
        return state;
    }
}
 
export default userReducer;