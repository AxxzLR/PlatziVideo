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
                user:action.payload
            }
        default:
            return state
    }
}

export default reducer