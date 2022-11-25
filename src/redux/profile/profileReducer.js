import {SET_LOADING,USER_PROFILE_DATA} from '../actionType'

let initialState = {
    user:null,
    isLoading: false
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_LOADING:   
            return {
                ...state,
                isLoading : true
            }

        case USER_PROFILE_DATA:
            return {
                ...state,
                user: action.payload.user,
                isLoading: true,
            }
    
        default:
            return state
    }
}

export default profileReducer;