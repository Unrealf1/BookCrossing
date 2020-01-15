import { ADD_BOOK, REMOVE_BOOK, TOGGLE_MODAL, LOADED } from "./Actions"

const defaultState = {
    books: [],
    modalVisible: false,
    loading: true
};

export const reducerLibrary = (state=defaultState, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return {...state, 
                books: [...state.books, {
                    name: action.payload.name,
                    author: action.payload.author,
                    id: action.payload.id
            }]}
        case REMOVE_BOOK:
            return {...state,
                books: state.books.filter(
                    book => book.id !== action.payload.id
                )                
            }
        case TOGGLE_MODAL:
            return {
                ...state, modalVisible: !state.modalVisible
            }
        case LOADED:
            return {
                ...state, loading: false
            }
        default:
            break;
    }

    return state;
}
