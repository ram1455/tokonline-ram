import {USER_SET_EMAIL,USER_SET_NAME,USER_SET_PASSWORD,USER_RESET_FORM} from '../actionType'


let initialState = {
    email: '',
    password: '',
    full_name: ''
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {

        case USER_SET_EMAIL:
            return {
                ...state,
                email: action.payload.email
            }
    
        case USER_SET_PASSWORD:
            return {
                ...state,
                password: action.payload.password
            }
    
        case USER_SET_NAME:
            return {
                ...state,
                full_name: action.payload.full_name
            }
    
        case USER_RESET_FORM:
            return {
                ...state
            }
    
        default:
            return {
                state
            } 
    }
} 

export default registerReducer;