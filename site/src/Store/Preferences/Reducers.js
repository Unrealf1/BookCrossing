import { TOGGLE_NIGHTMODE } from "./Actions"

const defaultState = {
    nightmode: false
};

export const reducerPreferences = (state=defaultState, action) => {
    switch (action.type) {
        case TOGGLE_NIGHTMODE:
            const nightmode = !state.nightmode
            if (nightmode) {
                document.body.style.background = "black";
                document.body.style.color = "white";
            } else {
                document.body.style.background = "white";
                document.body.style.color = "black";
            }
            return {...state, 
                nightmode: nightmode  
            }
        default:
            break;
    }

    return state;
}
