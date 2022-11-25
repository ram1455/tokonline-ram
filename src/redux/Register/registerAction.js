import {USER_SET_EMAIL,USER_SET_NAME,USER_SET_PASSWORD, USER_RESET_FORM} from '../actionType';
import ServerApi from '../../app/api/ServerApi';
import Swal from 'sweetalert2';




const resetForm = () => {
    return {
        type: USER_RESET_FORM
    }
}

const setEmail = (email) => {
    return {
        type : USER_SET_EMAIL,
        payload: {
            email
        }
    }
}

const setPassword = (password) => {
    return {
        type : USER_SET_PASSWORD,
        payload: {
            password
        }
    }
}

const setName = (full_name) => {
    return {
        type: USER_SET_NAME,
        payload: {
            full_name
        }
    }
}

const register = (full_name,email,password, navigate) => async (dispatch) => {
    try {
        const registerData = {
            full_name,email,password
        }
    
        const postRegister = await ServerApi({
            method: 'POST',
            mode: 'cors',
            url: '/auth/register',
            data: registerData
        })
        if (!postRegister.data.fields) {
            Swal.fire({
                icon: 'success',
                text:'register berhasil',
                timer:3000
            })
            navigate('/login')
        }


    } catch (error) {
        console.log(error);
    }
}

const registerAction = {
    register,
    setEmail,
    setPassword,
    setName,
    resetForm
}

export default registerAction;