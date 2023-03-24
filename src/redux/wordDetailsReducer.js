
const ADD_WORD_DETAILS = "ADD_WORD_DETAILS"

export function addWordDetails(data){
    return {
        type: ADD_WORD_DETAILS,
        payload: data
    }
}

export default function wordDetailsReducer(state=null, action){
    switch(action.type){
        case ADD_WORD_DETAILS:
            return action.payload
        default: 
            return state
    }
}