import { actionTypes } from '../actions'

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_FAVORITE:
            const result = state.myList.filter(item => item.id === action.payload.id);
            return result.length > 0 ? state : {
                ...state,
                myList: [...state.myList, action.payload]
            }
        case actionTypes.DELETE_FAVORITE:
            return {
                ...state,
                myList: state.myList.filter(item => item.id !== action.payload)
            }
        case actionTypes.LOGIN_REQUEST:
            return {
                ...state,
                user: action.payload
            }
        case actionTypes.LOGOUT_REQUEST:
            return {
                ...state,
                user: action.payload
            }
        case actionTypes.REGISTER_REQUEST:
            return {
                ...state,
                user: action.payload
            }
        case actionTypes.GET_VIDEO_SOURCE:
            return {
                ...state,
                playing: state.trends.find(item => item.id === Number(action.payload))
                    || state.originals.find(item => item.id === Number(action.payload))
                    || []
            }
        case actionTypes.CLEAN_VIDEO_SOURCE:
            return {
                ...state,
                playing: []
            }
        case actionTypes.SET_SEARCH:
            if (action.payload.length > 0) {
                const trendsFilter = state.trends.
                    filter(item => item.title.toLowerCase().includes(action.payload)
                        || item.description.toLowerCase().includes(action.payload))
                const originalsFilter = state.originals.
                    filter(item => item.title.toLowerCase().includes(action.payload)
                        || item.description.toLowerCase().includes(action.payload))
                return {
                    ...state,
                    search: { searchParam: action.payload, searchResults: [...trendsFilter, ...originalsFilter] }
                }
            }
            return {
                ...state,
                search: { searchParam: '', searchResults: [] }
            }
        default:
            return state
    }
}

export default reducer