import axios from "axios";
import {  GET_ONE_POST, GET_POSTS} from "../ActionTypes/postTypes";
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
export const addpost = (data,id,id2) => async (dispatch,) => {

 
  
    try {
      await axios.post(`/users/addpost/${id}/community/${id2}`,data,id,id2);
      dispatch(getposts());
    } catch (error) {
   console.log(error)
    }
  };
  //-----------LIKES POST----------------//
  export const Likespost = (id,id2,data) => async (dispatch) => {
    try {
       await axios.post(`/users/likepost/${id}/post/${id2}`,data);
      dispatch(getposts());
    } catch (error) {
   console.log(error)
    }
  };
    //-----------LIKES POST----------------//
    export const Unlikespost = (id) => async (dispatch) => {
      try {
         await axios.delete(`/users/unlikepost/${id}`);
        dispatch(getposts());
      } catch (error) {
     console.log(error)
      }
    };
  //-----------DELETE POST----------------//
  export const deletePost = (id) => async (dispatch) => {
    
    try {
      await axios.delete(`/users/deletepost/${id}`);
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
  export const edit_post=(data,id)=>async(dispatch)=>{
    try {
       await axios.put(`/users/editpost/${id}`,data)
      dispatch(getposts())
    } catch (error) {
      console.log(error)
    }
  }


