import axios from "axios";
import { ADD_COMMUNITY, GET_COMMUNITIES } from "../ActionTypes/communityTypes";

//-----------GET COMMINITIES----------------//
export const getcommunities = (data) => async (dispatch) => {
    try {
      const res = await axios.get("/users/allcommunities", data);
      dispatch({ type: GET_COMMUNITIES, payload: res.data });
    } catch (error) {
     
        console.log(error)
    }
  };
  //-----------ADD COMMINITY----------------//
export const addcommunity = (data) => async (dispatch) => {
    try {
      const res = await axios.post("/users/addcommunity", data);
      dispatch({ type: ADD_COMMUNITY, payload: res.data });
    } catch (error) {
   console.log(error)
    }
  };