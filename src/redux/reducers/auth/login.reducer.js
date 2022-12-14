import {LOGIN, LOGIN_SUCCESS, LOGIN_FAILED} from '../../action.type';
import {toast} from "react-toastify"
// import jwt_decode from "jwt-decode";


const initialState = {
    token: localStorage.getItem('token') || null,
    data: "", errors: "", loading: false, message: ""
}

// const timerBeforeRedirect= () => {
//     setTimeout(() => {
//         window.location.href = `/home`;
//     }, 2000);
// }

const LoginReducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case LOGIN:
            return {
                ...state,
                loading: true
            }
        case LOGIN_FAILED:
            toast.error(payload?.error || "could not login this moment")
            return {
                ...state,
                errors: payload.error,
                data: null,
                message: payload.message,
                loading: false,
            }
        case LOGIN_SUCCESS:
            
            toast.success(payload?.success || "Login Successful")
            localStorage.setItem('token', payload.data.token);
            localStorage.setItem("currency", payload.data.currency);
            localStorage.setItem("language", payload.data.language);
            localStorage.setItem("country", payload.data.country);
            window.location.href = `/home`;
            return {
                ...state,
                data: payload.data.data,
                loading: false,
                message:payload.data.message
            }
        default:
            return state
    }
}
export default LoginReducer;