import {USER_SET_EMAIL,USER_SET_PASSWORD,USER_RESET_FORM} from '../actionType'

let initialState = {
    email: '',
    password: ''
}

const loginReducers = (state = initialState , action) => {

    switch (action.type) {
        case USER_SET_EMAIL:
            return {
                ...state,
                email: action.payload.email
            };

        case USER_SET_PASSWORD:
            return {
                ...state,
                password: action.payload.password
            };

        case USER_RESET_FORM:
            return {
                state
            }
    
        default:
            return state
            
    }
}

export default loginReducers;