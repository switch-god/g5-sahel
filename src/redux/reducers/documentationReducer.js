const initialState = {
    publications : [],
    discours : [],
    correspondance : [],
    autresDocuments : [],
    reglementations : [],
    multimedias : [],
};

const documentationReducer = (state = initialState, action) => {
    switch(action.type) {

        case 'GET_PUBLICATIONS' :
            return {
                ...state,
                publications: action.payload,
                infos: action.pageInfos
            }

        default : 
            return state;
    }
};

export default documentationReducer;
