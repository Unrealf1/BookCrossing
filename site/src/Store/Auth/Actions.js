export const SUBMIT_LOGIN = 'SUBMIT_LOGIN'

export function actionSubmitLogin(login, id) {
    return {
        type: SUBMIT_LOGIN,
        login: login,
        id: id
    }
}
