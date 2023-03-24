import {legacy_createStore as createStore, combineReducers } from "redux"
import themeReducer from "./themeReducer"



const rootReducer = combineReducers({
    theme: themeReducer
})

const store = createStore(rootReducer)

store.subscribe(()=>{
    console.log(store.getState())
})

export default store