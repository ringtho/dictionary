
const ADD_KEYWORD = 'ADD_KEYWORD'

export const addKeyWord = (word) => {
  return {
    type: ADD_KEYWORD,
    payload: word
  }
}

const keyWordReducer = (keyWord = '', action) => {
  switch (action.type) {
    case ADD_KEYWORD:
      return action.payload
    default:
      return keyWord
  }
}

export default keyWordReducer
