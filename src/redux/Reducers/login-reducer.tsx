import {TParticipant} from "../types/participant";

interface IAction {
    type: string,
    payload?: Partial<TParticipant>
}

const initialState = {

}

export const loginReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                userInfo: {...action.payload}
            }
        default:
            return state
    }

}


