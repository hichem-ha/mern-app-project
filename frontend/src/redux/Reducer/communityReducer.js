import { ADD_COMMUNITY, GET_COMMUNITIES, GET_ONE_COMMUNITY } from "../ActionTypes/communityTypes";

const initialState={
    Communitiees:[],
    community:null 
}
const communityReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_COMMUNITIES:
        return { ...state, communities: payload.getcommunities };
        case GET_ONE_COMMUNITY:
        return { ...state, communities: payload.getOnecommunity };
        case ADD_COMMUNITY:
            return { ...state, community: payload.newcommunity };
    
    default:
    return state;
    };
};
export default communityReducer;