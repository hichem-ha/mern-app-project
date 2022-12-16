import { GET_USERS } from "../ActionTypes/profileTypes";

const initialState = {
   users:[]
 };

 const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case GET_USERS:
        return { ...state, users: payload.getusers }; 
    default:
      return state;
  }
};
export default profileReducer;