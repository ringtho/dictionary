const SET_IDLE_STATUS = "SET_IDLE_STATUS"
const SET_SUBMITTING_STATUS = "SET_SUBMITTING_STATUS"


export function setIdleStatus(){
    return {
        type: SET_IDLE_STATUS
    }
}

export function setSubmittingStatus(){
    return {
        type: SET_SUBMITTING_STATUS
    }
}


export default function statusReducer(status="idle", action){
    switch (action.type){
        case SET_IDLE_STATUS:
            return "idle"
        case SET_SUBMITTING_STATUS:
            return "submitting"
        default:
            return status
    }
}
