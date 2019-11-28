export const ADD_BOOK = 'ADD_BOOK'

export function actionAddBook(name='Book Name', author='Book Author') {
    return {
        type: ADD_BOOK,
        payload: {
            name: name,
            author: author
        }
    }
}

export const REMOVE_BOOK = 'REMOVE_BOOK'

export function actionRemoveBook(name=null, author=null) {
    return {
        type: REMOVE_BOOK,
        payload: {
            name: name,
            author: author
        }
    }
}

export const TOGGLE_MODAL = 'TOGGLE_MODAL'

export const actionToggleModal = {
    type: TOGGLE_MODAL
}
