const initialState = {
    imagesBloc : [],
    posts : [],
    events : [],
    activites : [],
};

const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case 'GET_ACTIVITES' : 
            return {
                ...state,
                activites : action.payload,
            }

        case 'GET_LATEST_EVENTS' : 
            return {
                ...state,
                events : action.payload,
            }
        
            case 'GET_LATEST_POSTS' : 
            return {
                ...state,
                posts : action.payload,
            }
        
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
