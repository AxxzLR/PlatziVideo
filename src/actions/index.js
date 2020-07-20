export const actionTypes = {
    SET_FAVORITE: 'SET_FAVORITE',
    DELETE_FAVORITE: 'DELETE_FAVORITE',
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGOUT_REQUEST: 'LOGOUT_REQUEST',
    REGISTER_REQUEST: 'REGISTER_REQUEST',
    GET_VIDEO_SOURCE: 'GET_VIDEO_SOURCE',
    CLEAN_VIDEO_SOURCE: 'CLEAN_VIDEO_SOURCE',
    SET_SEARCH: 'SET_SEARCH',
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

export const logoutRequest = payload => ({
    type: actionTypes.LOGOUT_REQUEST,
    payload,
})

export const registerRequest = payload => ({
    type: actionTypes.REGISTER_REQUEST,
    payload,
})

export const getVideoSource = payload => ({
    type: actionTypes.GET_VIDEO_SOURCE,
    payload,
})

export const cleanVideoSource = payload => ({
    type: actionTypes.CLEAN_VIDEO_SOURCE,
    payload,
})

export const setSearch = payload => ({
    type: actionTypes.SET_SEARCH,
    payload,
})