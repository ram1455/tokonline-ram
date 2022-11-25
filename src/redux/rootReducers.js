import { combineReducers } from "redux";
import registerReducer from './Register/registerReducer'; 
import loginReducers from './Login/loginReducers';
import profileReducer from "./profile/profileReducer";

const rootReducers = combineReducers({
    registerReducer,
    loginReducers,
    profileReducer,
})

export default rootReducers;