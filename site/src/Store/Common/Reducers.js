import { AUTHENTICATE } from "./Actions"

const defaultState = {
    authenticated: false
};

export const reducerCommon = (state=defaultState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return {
                ...state,
                authenticated: true
            }
        default:
            break;
    }

    return state;
}
