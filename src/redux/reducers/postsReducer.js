const initialState = {
    loading : true,
    imagesBloc : [],
    posts : [],
    allEvents : [],
    events : [],
    activites : [],
    jobs : [],
    searchStatus : false,

    // Presentation :
    presentation_bloc_1 : [],
    presentation_bloc_2 : [],
    presentation_citation : [],
    

    // Nos Activites :
    defense_securite : [],
    gouvernance : [],
    infrastructure : [],
    resilence : [],
};

const postsReducer = (state = initialState, action) => {
    switch(action.type) {

        case 'GET_PRESENTATION_BLOC_1' :
            return {
                ...state,
                presentation_bloc_1 : action.payload,
            }

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
