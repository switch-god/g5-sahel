const initialState = {
    allEvents : [],
    year : null,
};

const eventsReducer = (state = initialState, action) => {
    switch(action.type) {

        case 'GET_ALL_EVENTS' : 
            return {
                ...state,
                allEvents : action.payload,
                year : action.year,
            }
       
        default : 
            return state;
    }
};

export default eventsReducer;
