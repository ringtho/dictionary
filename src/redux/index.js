import { legacy_createStore as createStore, combineReducers } from 'redux'
import themeReducer from './themeReducer'
import errorReducer from './errorReducer'
import statusReducer from './statusReducer'
import wordDetailsReducer from './wordDetailsReducer'
import formDataReducer from './formDataReducer'
import keyWordReducer from './keyWordReducer'

const rootReducer = combineReducers({
  theme: themeReducer,
  error: errorReducer,
  status: statusReducer,
  wordDetails: wordDetailsReducer,
  formData: formDataReducer,
  keyWord: keyWordReducer
})

const store = createStore(rootReducer)

export default store
