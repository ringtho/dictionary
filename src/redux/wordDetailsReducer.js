
const ADD_WORD_DETAILS = 'ADD_WORD_DETAILS'

export const addWordDetails = (data) => {
  return {
    type: ADD_WORD_DETAILS,
    payload: data
  }
}

const wordDetailsReducer = (state = null, action) => {
  switch (action.type) {
    case ADD_WORD_DETAILS:
      return action.payload
    default:
      return state
  }
}

export default wordDetailsReducer
