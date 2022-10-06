import axios from "axios";
import { ADD_COMMUNITY,  GET_COMMUNITIES, GET_ONE_COMMUNITY } from "../ActionTypes/communityTypes";

//-----------GET COMMUNITIES----------------//
export const getcommunities = () => async (dispatch) => {
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
    try {
      const res = await axios.get("/users/allcommunities", config);
      dispatch({ type: GET_COMMUNITIES, payload: res.data });
    } catch (error) {
     
        console.log(error)
    }
  };
  //------------GET ONE COMMUNITY---------//
  export const getOneCommunity = (id) => async (dispatch) => {
    const config = {
      headers: {
        token: localStorage.getItem("token"),
      },
    };
      try {
        const res = await axios.get(`/users/oneCommunity/${id}`, config);
        dispatch({ type: GET_ONE_COMMUNITY, payload: res.data });
      } catch (error) {
       
          console.log(error)
      }
    };
  //-----------ADD COMMUNITY----------------//
export const addcommunity = (data,id) => async (dispatch) => {
    try {
      const res = await axios.post(`/users/addcommunity/${id}`, data);
      dispatch(getcommunities());
    } catch (error) {
   console.log(error)
    }
  };
  //----------UPDATE COMMUNITY-------------------//
 
  // //----------DELETE COMMUNITY-----------------//
  // export const deletecommunity = (data) => async (dispatch) => {
  //   try {
  //     const res = await axios.delete("/users/deletecommunity", data);
  //     dispatch({ type: DELETE_COMMUNITY, payload: res.data });
  //   } catch (error) {
  //  console.log(error)
  //   }
  // };