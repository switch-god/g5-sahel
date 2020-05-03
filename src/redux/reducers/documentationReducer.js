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

        case 'GET_MULTIMEDIAS' :
            return {
                ...state,
                multimedias : action.payload,
        }

        case 'GET_REGLEMENTATIONS' :
            return {
                ...state,
                reglementations : action.payload,
        }

        case 'GET_PUBLICATIONS' :
            return {
                ...state,
                publications : action.payload,
            }

        case 'GET_DISCOURS' :
            return {
                ...state,
                discours : action.payload,
            }
        
        case 'GET_CORRESPONDANCE' :
            return {
                ...state,
                correspondance : action.payload,
            }
        
        case 'GET_AUTRES_DOCUMENTS' :
            return {
                ...state,
                autresDocuments : action.payload,
            }

       
        default : 
            return state;
    }
};

export default documentationReducer;