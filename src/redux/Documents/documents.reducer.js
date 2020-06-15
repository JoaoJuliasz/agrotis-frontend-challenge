import { CREATE_DOCUMENT, UPDATE_DOCUMENT, DELETE_DOCUMENT, RESET_TOAST_MESSAGE, EMTPY_FIELDS_MESSAGE } from './documents.types'

const initialState = {
    documents: [],
    toastMessage: false,
    emptyInputElements: false,
}

const documentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_DOCUMENT:
            return {
                ...state,
                documents: [...state.documents, action.payload],
                toastMessage: true,
                emptyInputElements: false,
            }
        case UPDATE_DOCUMENT:
            const doc = state.documents.find(doc => doc.id === action.payload.id);
            return {
                ...state,
                documents: [...state.documents.filter(docuemnt => docuemnt !== doc), action.payload]
            }
        case DELETE_DOCUMENT: 
            return {
                ...state,
                documents: state.documents.filter(doc => doc.id !== action.payload)
            }
        case RESET_TOAST_MESSAGE:
            return {
                ...state,
                toastMessage: false,
            }
        case EMTPY_FIELDS_MESSAGE:
            return {
                ...state,
                emptyInputElements: true,
            }
        default: return state
    }
}

export default documentsReducer