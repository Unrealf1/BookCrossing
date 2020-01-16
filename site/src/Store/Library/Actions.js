export const ADD_BOOK = 'ADD_BOOK'
export const REMOVE_BOOK = 'REMOVE_BOOK'
export const TOGGLE_MODAL = 'TOGGLE_MODAL'
export const LOADED = 'LOADED'

var nextId = 1;

export function actionAddBook(name='Book Name', author='Book Author') {
    const id = nextId++;
    return {
        type: ADD_BOOK,
        payload: {
            name: name,
            author: author,
            id: id
        }
    }
}

export function actionRemoveBook(id) {
    return {
        type: REMOVE_BOOK,
        payload: {
            id: id
        }
    }
}

export const actionToggleModal = {
    type: TOGGLE_MODAL
}

export const actionLoaded = {
    type: LOADED
}
