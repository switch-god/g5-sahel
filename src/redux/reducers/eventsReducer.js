const initialState = {
    allEvents : [],
    // events : [],
};

const eventsReducer = (state = initialState, action) => {
    switch(action.type) {

        case 'GET_ALL_EVENTS' : 
            return {
                ...state,
                allEvents : action.payload,
            }
       
        default : 
            return state;
    }
};

export default eventsReducer;
