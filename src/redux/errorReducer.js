
const SET_ERROR = "SET_ERROR"

export function errorAction(err){
    return {
        type: SET_ERROR, 
        payload: err
    }
}

export default function errorReducer(error=null, action){
    switch(action.type){
        case SET_ERROR:
            return action.payload
        default:
            return error
    }
}