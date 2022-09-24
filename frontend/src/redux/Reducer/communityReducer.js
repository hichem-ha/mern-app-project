import { ADD_COMMUNITY, GET_COMMUNITIES } from "../ActionTypes/communityTypes";

initial={
    Communities:[],
    community:null
    
}
const communityReducer = (state = initial, { type, payload }) => {
    switch (type) {
      case GET_COMMUNITIES:
        return { ...state, community: payload.getcommunities };
        case ADD_COMMUNITY:
            return { ...state, community: payload.newcommunity };
    
    default:
    return state;
    };
};
export default communityReducer;