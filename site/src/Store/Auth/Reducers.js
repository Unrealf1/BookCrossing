import { SUBMIT_LOGIN } from "./Actions"

const defaultState = {
    login: null,
    id: null
};

export const reducerAuthorisation = (state=defaultState, action) => {
    switch (action.type) {
        case SUBMIT_LOGIN:
            return {
                ...state, login: action.login, id: action.id
            }
        default:
            break;
    }

    return state;
}