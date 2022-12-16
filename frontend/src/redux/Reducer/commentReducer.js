import { ADD_COMMENT, GET_COMMENTS } from "../ActionTypes/commentTypes";

const initialState={
    comments:[],
    post:null,
    loading:true,
}
const commentReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_COMMENTS:
        return { ...state, comments: payload.getposts ,loading:false};
        case ADD_COMMENT:
        return { ...state, post: payload.newpost ,loading:false};
        //     case LIKES_POST:
        // return  { ...state , likes:payload.de};
        
    
    default:
    return state;
    };
};
export default commentReducer;