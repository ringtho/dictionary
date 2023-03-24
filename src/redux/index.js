import {legacy_createStore as createStore, combineReducers } from "redux"
import themeReducer from "./themeReducer"
import errorReducer from "./errorReducer"
import statusReducer from "./statusReducer"
import wordDetailsReducer from "./wordDetailsReducer"
import formDataReducer from "./formDataReducer"


const rootReducer = combineReducers({
    theme: themeReducer,
    error: errorReducer,
    status: statusReducer,
    wordDetails: wordDetailsReducer,
    formData: formDataReducer
})

const store = createStore(rootReducer)

store.subscribe(()=>{
    console.log(store.getState())
})

export default store