import {REGISTER,LOGIN,GET_CURRENT,LOGOUT,FAIL, GET_USERS} from "../ActionTypes/auhTypes";

const initialState = {
    user: {},
    auth: false,
   errors:[]
 };

 const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.newuser, auth: true };
    case LOGIN:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.founduser, auth: true };
    case GET_CURRENT:
      return { ...state, user: payload.user , auth: true };
    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, user: null, auth: false };
    case FAIL:
      return { ...state, errors: payload.errors };


    default:
      return state;
  }
};
export default authReducer;