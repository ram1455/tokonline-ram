import {USER_SET_EMAIL,USER_SET_PASSWORD, USER_RESET_FORM} from '../actionType';
import ServerApi from '../../app/api/ServerApi';
import Swal from 'sweetalert2';
import profileAction from '../profile/profileAction';

const setEmail = (email) => {
    return {
        type: USER_SET_EMAIL,
        payload: {
            email
        }
    }
}

const setPassword = (password) => {
    return {
        type: USER_SET_PASSWORD,
        payload: {
            password
        }
    }
}

const resetForm = () => {
    return {
        type: USER_RESET_FORM
    }
}

const login = (email, password, navigate) => async (dispatch) => {
    try {
        const loginData = {
            email,password
        }
        
        const postLogin = await ServerApi({
            method: 'POST',
            mode: 'cors',
            url: '/auth/login',
            data: loginData
        });

        const token = postLogin.data.token;
        localStorage.setItem('token', token);
        
        if (!postLogin.data.error) {
            Swal.fire({
                icon: 'success',
                text:'register berhasil',
                timer:3000
            });

            const getProfileUser = await ServerApi({
                method: 'GET',
                url: '/auth/me',
                headers: {
                    Authorization: "Bearer " + token
                }
            })

            dispatch(profileAction.setProfile(getProfileUser.data));
            localStorage.setItem('user', JSON.stringify(getProfileUser.data));

            navigate("/profile");
            window.location.reload();
        }
        


    } catch (err) {
        console.log(err);
    }

    
};

const loginAction = {
    login,
    resetForm,
    setEmail,
    setPassword
}

export default loginAction;


