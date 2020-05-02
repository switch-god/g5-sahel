const initialState = {

// Nos Activites :
    defense_securite : [],
    gouvernance : [],
        genre : [],
        cellule : [],
    infrastructure : [],
    resilence : [],
};

const nosActivitesReducer = (state = initialState, action) => {
    switch(action.type) {

        case 'GET_RESILENCE' : 
            return {
                ...state,
                resilence : action.payload,
            }
        case 'GET_INFRASTRUCTURE' : 
            return {
                ...state,
                infrastructure : action.payload,
            }

        case 'GET_GENRE' : 
            return {
                ...state,
                genre : action.payload,
            }
        
        case 'GET_CELLULE' :
            return {
                ...state,
                cellule : action.payload,
            }


        case 'GET_GOUVERNANCE' : 
            return {
                ...state,
                gouvernance : action.payload,
            }

        case 'GET_DEFENSE_SECURITE' :
            return {
                ...state,
                defense_securite : action.payload
            }
    
        default : 
            return state;
    }
};

export default nosActivitesReducer;
