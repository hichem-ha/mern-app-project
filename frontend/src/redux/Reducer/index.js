import { combineReducers } from "redux";
import authReducer from "./authReducer";
import postReducer from "./postReducer";
import communityReducer from "./communityReducer"

const rootReducer = combineReducers({ authReducer , postReducer ,communityReducer});
export default rootReducer;