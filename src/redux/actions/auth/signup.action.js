import { SIGNUP_SUCCESS, SIGNUP_FAILED } from "../../action.type";
import { retrieveErrMessage } from "../../../utils/retrieveError";
import  request from "../../../utils/apiHelper";
import {toast} from 'react-toastify';

const signupSuccess = (payload) => ({
  type: SIGNUP_SUCCESS,
  payload,
});

const signupFailed = (payload) => ({
  type: SIGNUP_FAILED,
  payload,
});

const signup = (payload) => async (dispatch) => {

  try {
    const res = await request.post("register", payload);
      toast.success(res.data.message,{
        autoClose: 2000,
      });
      return dispatch(signupSuccess(res.message));
  } catch (error) {
    toast.error(retrieveErrMessage(error.response.data.message));
    console.log(error.response.data.status);
    return dispatch(signupFailed(error));
    
  }
};

export default signup;
