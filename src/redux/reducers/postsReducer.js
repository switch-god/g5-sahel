const initialState = {
    loading : true,
    imagesBloc : [],
    posts : [],
    allEvents : [],
    events : [],
    activites : [],
    jobs : [],
    searchStatus : false,
};

const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case 'SET_LOADING' : 
            return {
                ...state,
                loading : action.payload,
            }

        case 'GET_ACTIVITES' : 
            return {
                ...state,
                activites : action.payload,
            }

        case 'GET_LATEST_EVENTS' : 
            return {
                ...state,
                allEvents : action.payload1,
                events : action.payload2,
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
        
        case 'GET_JOBS' :
            return {
                ...state,
                jobs : action.payload,
            }

        case 'TOOGLE_SEARCH' : 
            return {
                ...state,
                searchStatus : true
            }

        case 'UNTOOGLE_SEARCH' : 
            return {
                ...state,
                searchStatus : false
            }

        default : 
            return state;
    }
};

export default postsReducer;
