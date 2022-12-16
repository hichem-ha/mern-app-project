import axios from "axios";
import { GET_USERS } from "../ActionTypes/profileTypes";
import { get_current } from "./authActions";

//-----------GET USERS-------------//
export const getusers = () => async (dispatch) => {
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
    try {
      const res = await axios.get("/users/allusers" ,config );
      dispatch({ type: GET_USERS, payload: res.data });
    } catch (error) {
     
        console.log(error)
    }
  }
  //-----------EDIT PROFILE IMAGE---------------//
  export const edit_profile=(data,id)=>async(dispatch)=>{
    try {
       await axios.put(`/users/uploadimage/${id}`,data)
      dispatch(get_current())
    } catch (error) {
      console.log(error)
    }
  }
   //-----------EDIT PROFILE IMAGE---------------//
   export const edit_cover_profile=(data,id)=>async(dispatch)=>{
    try {
       await axios.put(`/users/uploadCoverimage/${id}`,data)
      dispatch(get_current())
    } catch (error) {
      console.log(error)
    }
  }