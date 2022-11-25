import {USER_PROFILE_DATA,SET_LOADING} from '../actionType';
import ServerApi from '../../app/api/ServerApi';

const setProfile = (user) => {
    return {
        type: USER_PROFILE_DATA,
        payload: {
            user : user
        }
    } 
};

const setLoading  = () => {
    return {
        type: SET_LOADING
    }   
};

const getProfile = () =>  async (dispatch ) => {
    try {
        let token = localStorage.getItem('token');
    
        const userData = await ServerApi({
            method: "GET",
            url: '/auth/me',
            headers: {
                Authorization: "Bearer " + token
            }
        }) 

        dispatch(setProfile(userData.data));
        
    } catch (error) {
        console.log(error);
    }
    
}

const profileAction = {
    setLoading,
    setProfile,
    getProfile
};

export default profileAction;