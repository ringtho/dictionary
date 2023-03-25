
const ADD_KEYWORD = "ADD_KEYWORD"

export function addKeyWord(word){
    return {
        type: ADD_KEYWORD,
        payload: word
    }
}


export default function keyWordReducer(keyWord="", action){
    switch(action.type){
        case ADD_KEYWORD:
            return action.payload
        default:
            return keyWord
    }
}