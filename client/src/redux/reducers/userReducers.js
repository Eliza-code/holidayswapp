const initialState =  [{
    Hogares: [{
        id: 1,
        Dueño: "Silvio",
        Ciudad: "Roma",
        País: "Italy",
        Rating: 5,
        Puntos: 300
    },
    {
        id: 2,
        Dueño: "Maria",
        Ciudad: "Roma",
        País: "Italy",
        Rating: 5,
        Puntos: 200
    },
    {
        id: 3,
        Dueño: "Silvia",
        Ciudad: "Roma",
        País: "Italy",
        Rating: 5,
        Puntos: 400
    },
    {
        id: 4,
        Dueño: "Silvana",
        Ciudad: "Roma",
        País: "Italy",
        Rating: 5,
        Puntos: 100
    },
    {
        id: 5,
        Dueño: "Silvestre",
        Ciudad: "Roma",
        País: "Italy",
        Rating: 5,
        Puntos: 400
    },
    {
        id: 6,
        Dueño: "Sandro",
        Ciudad: "Roma",
        País: "Italy",
        Rating: 5,
        Puntos: 300
    },
    {
        id: 7,
        Dueño: "Sofia",
        Ciudad: "Roma",
        País: "Italy",
        Rating: 5,
        Puntos: 300
    },
    {
        id: 8,
        Dueño: "Sandro",
        Ciudad: "Roma",
        País: "Italy",
        Rating: 5,
        Puntos: 400
    }]
}]

const userReducer = (state=initialState, action) => {
    switch (action.type){
        
        default: 
        return state;
    }
}
 
export default userReducer;