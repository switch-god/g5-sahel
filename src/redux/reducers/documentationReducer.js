const initialState = {
    publications : [],
};

const documentationReducer = (state = initialState, action) => {
    switch(action.type) {

        case 'GET_PUBLICATIONS' :
            return {
                ...state,
                publications : action.payload,
            }

       
        default : 
            return state;
    }
};

export default documentationReducer;
