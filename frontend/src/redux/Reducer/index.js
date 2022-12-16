import { combineReducers } from "redux";
import authReducer from "./authReducer";
import postReducer from "./postReducer";
import communityReducer from "./communityReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({ authReducer , postReducer ,communityReducer,profileReducer});
export default rootReducer;