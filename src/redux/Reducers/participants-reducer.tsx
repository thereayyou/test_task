import {ADD_NEW_PARTICIPANT, DELETE_PARTICIPANT, EDIT_PARTICIPANT} from "../const/const";
import {TParticipant} from "../types/participant";
import {parseDateStringToDate} from "../../utils";

interface IAction {
    type: string,
    payload?: Partial<TParticipant>
}

const initialState = {
    participants: [
        {id: 1, surname: "Иванов", name: "Петр", middleName: "Иванович", city: "Пермь", birthday: parseDateStringToDate("1990-01-01"), email: "ivan@gmail.com", phone: "+79995553535", distance: 5, hasPayment: true},
        {id: 2, surname: "Константинопольский", name: "Константин", middleName: "Константинович", city: "Александровск-Сахалинский", birthday: parseDateStringToDate("1985-02-15"), email: "konstantinopolskiy@gmail.com", phone: "+79123456789", distance: 10, hasPayment: true},
        {id: 3, surname: "Чернова", name: "Анастасия", middleName: "Витальевна", city: "Санкт-Петербург", birthday: parseDateStringToDate("1999-10-22"), email: "nastya123@ya.ru", phone: "+79374657033", distance: 3, hasPayment: false},
    ]
}

export const participantsReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case EDIT_PARTICIPANT: {
                return {
                    ...state,
                    participants: state.participants.map((el) => {
                        if(el.id === action.payload?.id) {
                            return {...action.payload}
                        }

                        return el
                    })
                }
        }
        case DELETE_PARTICIPANT: {
            return {
                ...state,
                participants: state.participants.filter((el) => {
                    if(el.id !== action.payload?.id) {
                        return {...action.payload}
                    }
                })
            }
        }
        case ADD_NEW_PARTICIPANT: {
            return {
                ...state,
                participants:[...state.participants, {
                    id: state.participants[state.participants.length - 1].id + 1,
                    middleName: action.payload?.middleName,
                    name: action.payload?.name,
                    surname: action.payload?.surname,
                    city: action.payload?.city,
                    phone: action.payload?.phone,
                    email: action.payload?.email,
                    hasPayment: action.payload?.hasPayment,
                    birthday: action.payload?.birthday,
                    distance: action.payload?.distance,
                }]
            }
        }

        default:
            return state
    }

}


