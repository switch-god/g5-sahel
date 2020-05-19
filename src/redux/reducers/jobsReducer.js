const initialState = {
    jobs : [],
    jobs1 : [],
};

const jobsReducer = (state = initialState, action) => {
    switch(action.type) {

        case 'GET_JOBS' :
            return {
                ...state,
                jobs : action.payload,
            }
        
        case 'GET_JOBS_1' :
            return {
                ...state,
                jobs1 : action.payload,
            }

        default : 
            return state;
    }
};

export default jobsReducer;
