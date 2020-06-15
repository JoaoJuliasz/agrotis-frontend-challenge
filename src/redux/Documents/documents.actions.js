import { CREATE_DOCUMENT, UPDATE_DOCUMENT, DELETE_DOCUMENT, RESET_TOAST_MESSAGE, EMTPY_FIELDS_MESSAGE } from './documents.types'

export const createDocument = item => {
    return {
        type: CREATE_DOCUMENT,
        payload: item
    }
}
export const updateDocument = item => {
    return {
        type: UPDATE_DOCUMENT,
        payload: item
    }
}
export const deleteDocument = id => {
    return {
        type: DELETE_DOCUMENT,
        payload: id,
    }
}
export const resetToastMessage = () => {
    return {
        type: RESET_TOAST_MESSAGE,
    }
}
export const resetEmptyFieldsMessage = () => {
    return {
        type: EMTPY_FIELDS_MESSAGE
    }
}