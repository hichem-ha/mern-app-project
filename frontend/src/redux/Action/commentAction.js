import axios from "axios";
import { GET_COMMENTS } from "../ActionTypes/commentTypes";
import { getposts } from "./postActions";
//---------GET COMMENTS--------------//
// export const getcomments = () => async (dispatch) => {

//     try {
//       const res = await axios.get("/users/allcomments");
//       dispatch({ type: GET_COMMENTS, payload: res.data });
//     } catch (error) {
     
//         console.log(error)
//     }
//   };
 //-----------ADD COMMENT----------------//
 export const addcomment = (data,id,id2) => async (dispatch) => {
    try {
      const res = await axios.post(`/users/addcomment/${id}/post/${id2}`,data);
      dispatch(getposts());
    } catch (error) {
   console.log(error)
    }
  };
  //-----------DELETE COMMENT----------------//
  export const deletecomment = (id) => async (dispatch) => {
    try {
      const res = await axios.delete(`/users/deletecomment/${id}`);
      dispatch(getposts());
    } catch (error) {
   console.log(error)
    }
  };

