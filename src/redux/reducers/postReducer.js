const initialState = {
    items : [],
    item : {},
};

const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_POSTS' : 
            return {
                ...state,
                items : action.payload,
            }
        // case 'ADD_POSTS' :

        default : 
            return state;
    }
};



export default postReducer;
