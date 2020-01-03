export const ADD_BOOK = 'ADD_BOOK'

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

export const REMOVE_BOOK = 'REMOVE_BOOK'

export function actionRemoveBook(id) {
    return {
        type: REMOVE_BOOK,
        payload: {
            id: id
        }
    }
}

export const TOGGLE_MODAL = 'TOGGLE_MODAL'

export const actionToggleModal = {
    type: TOGGLE_MODAL
}
