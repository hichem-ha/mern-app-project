import { GET_COMMUNITIES, GET_ONE_COMMUNITY } from "../ActionTypes/communityTypes";

const initialState={
    communities:[],
    community:null ,
    loading:true,

}
const communityReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_COMMUNITIES:
        return { ...state, communities: payload.getcommunities , loading:false };
        case GET_ONE_COMMUNITY:
        return { ...state, community: payload.getcommunity , loading:false };
    default:
    return state;
    };
};
export default communityReducer;