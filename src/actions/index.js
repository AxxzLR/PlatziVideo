export const actionTypes = {
    SET_FAVORITE: 'SET_FAVORITE',
    DELETE_FAVORITE: 'DELETE_FAVORITE',
    LOGIN_REQUEST: 'LOGIN_REQUEST',
}

export const setFavorite = payload => ({
    type: actionTypes.SET_FAVORITE,
    payload,
})

export const deleteFavorite = payload => ({
    type: actionTypes.DELETE_FAVORITE,
    payload,
})

export const loginRequest = payload => ({
    type: actionTypes.LOGIN_REQUEST,
    payload,
})