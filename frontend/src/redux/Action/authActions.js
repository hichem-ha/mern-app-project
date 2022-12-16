import axios from "axios";
import {
  FAIL,
  GET_CURRENT,
  LOGIN,
  LOGOUT,
  REGISTER,
} from "../ActionTypes/auhTypes";
//-----------REGISTER----------------//
export const register = (data) => async (dispatch) => {
  try {
    const res = await axios.post("/users/register", data);
    dispatch({ type: REGISTER, payload: res.data });
  } catch (error) {
   
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
//-------------LOGIN-----------------//
export const login = (data) => async (dispatch) => {
  try {
    const res = await axios.post("/users/login", data);
    dispatch({ type: LOGIN, payload: res.data });

  } catch (error) {
    
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
//-----------GET_CURRENT--------------//
export const get_current = () => async (dispatch) => {
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/users/current", config);
    dispatch({ type: GET_CURRENT, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
//------------LOGOUT------------------//
export const logout = () => {
  return { type: LOGOUT };
};

