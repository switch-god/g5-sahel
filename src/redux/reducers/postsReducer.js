const initialState = {
    imagesBloc : [],
};

const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        
        
        case 'GET_HOME_BLOC_IMAGES' : 
            return {
                ...state,
                imagesBloc : action.payload,
            }
        
        default : 
            return state;
    }
};

export default postsReducer;
