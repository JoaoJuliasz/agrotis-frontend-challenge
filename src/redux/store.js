import { createStore } from 'redux'
import  documentsReducer from './Documents/documents.reducer'

const store = createStore(documentsReducer)

export default store