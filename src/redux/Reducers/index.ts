import {combineReducers} from "redux";
import {participantsReducer} from "./participants-reducer";
import {loginReducer} from "./login-reducer";
import {TParticipant} from "../types/participant";
import {IUser} from "../types/user";


export interface RootState {
    participantPage: {participants: Array<TParticipant>};
    user: {userInfo: IUser},
}

export const rootReducer = combineReducers({
    participantPage: participantsReducer,
    user: loginReducer
})
