import axios from "axios";
import { ADD_POST, GET_ONE_POST, GET_POSTS, LIKES_POST, TOGGLE_FALSE, TOGGLE_TRUE } from "../ActionTypes/postTypes";
//-----------GET POSTS----------------//
export const getposts = () => async (dispatch) => {
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
    try {
      const res = await axios.get("/users/allposts" , config);
      dispatch({ type: GET_POSTS, payload: res.data });
    } catch (error) {
     
        console.log(error)
    }
  };
  //-----------ADD POST----------------//
export const addpost = (newpost, id,id2) => async (dispatch) => {
    
    try {
      const res = await axios.post(`/users/addpost/${id}/community/${id2}`,newpost ,id ,id2);
      dispatch(getposts());
    } catch (error) {
   console.log(error)
    }
  };
  //-----------LIKES POST----------------//
  export const Likespost = (id) => async (dispatch) => {
    const config = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };
    try {
      const res = await axios.patch(`/users/likespost/${id}`, config,id);
      dispatch({ type: LIKES_POST, payload: res.data });
    } catch (error) {
   console.log(error)
    }
  };
  //-----------DELETE POST----------------//
  export const deletePost = (id) => async (dispatch) => {
    try {
      const res = await axios.delete(`/users/deletepost/${id}`);
      dispatch(getposts());
    } catch (error) {
   console.log(error)
    }
  };
   //-----------GET ONE POST----------------//
   export const getPost = (id) => async (dispatch) => {
    try {
      const res = await axios.get(`/users/getOnePost/${id}`);
      dispatch({type:GET_ONE_POST,payload:res.data.getpost});
    } catch (error) {
   console.log(error)
    }
  };
  //-----------UPDATE POST-------------//
  export const toggleTure=()=>{
    return {
      type:TOGGLE_TRUE,
    }
  }
  export const toggleFalse=()=>{
    return {
      type:TOGGLE_FALSE,
    }
  }

