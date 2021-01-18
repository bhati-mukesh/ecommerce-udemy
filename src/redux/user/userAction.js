import { SET_CURRENT_USER } from '../constants'


export const setCurrentUser = (user) => {
    return {
        payload: user,
        type: SET_CURRENT_USER
    }
}
