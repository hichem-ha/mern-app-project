import { GET_ONE_POST, GET_POSTS, LIKES_POST } from "../ActionTypes/postTypes";

const initialState={
    posts:[],
    post:null,
    loading:true,
    edit:false,   
}
const postReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_POSTS:
        return { ...state, posts: payload.getposts ,loading:false}; 
        case GET_ONE_POST:
            return { ...state, post: payload ,loading:false};
    default:
    return state;
    };
};
export default postReducer;