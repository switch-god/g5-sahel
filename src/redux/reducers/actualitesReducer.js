const initialState = {
    posts : [],
    welcomeG5: [],
    actualitesG5 : [],
    actualitesInter : [],
    events : [],
    activities : [],
    
};

const actualitesReducer = (state = initialState, action) => {
    switch(action.type) {

        case 'GET_ACTUALITES_INTERNATIONALE' :
            return {
                ...state,
                actualitesInter : action.payload,
            }

        case 'GET_ACTUALITES_PAYS_G5' :
            return {
                ...state,
                actualitesG5 : action.payload,
            }

        case 'GET_WELCOME_HOME_PAGE' :
            return {
                ...state,
                welcomeG5 : action.payload,
            }

            
        case 'GET_LATEST_EVENTS' : 
            return {
                ...state,
                events : action.payload
            }

        case 'GET_LATEST_ACTIVITIES' : 
            return {
                ...state,
                activities : action.payload
            }
    
        case 'GET_LATEST_POSTS' : 
            return {
                ...state,
                posts : action.payload,
            }
    

        default : 
            return state;
    }
};

export default actualitesReducer;
