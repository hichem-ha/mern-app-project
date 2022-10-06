import { ADD_POST, GET_ONE_POST, GET_POSTS, LIKES_POST, TOGGLE_FALSE, TOGGLE_TRUE } from "../ActionTypes/postTypes";

const initialState={
    posts:[ ],
    post:null,
    loading:true,
    edit:true,   
}
const postReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_POSTS:
        return { ...state, posts: payload.getposts ,loading:false};
        case GET_ONE_POST:
            return { ...state, post: payload.getpost ,loading:false};
            case LIKES_POST:
        return { ...state, like: payload.likespost };
        case TOGGLE_TRUE:
            return{...state , edit:true};
            case TOGGLE_FALSE:
                return{...state , edit:false}
    
    default:
    return state;
    };
};
export default postReducer;