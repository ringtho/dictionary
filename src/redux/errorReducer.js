
const SET_ERROR = 'SET_ERROR'

export const errorAction = (err) => {
  return {
    type: SET_ERROR,
    payload: err
  }
}

const errorReducer = (error = null, action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.payload
    default:
      return error
  }
}

export default errorReducer
