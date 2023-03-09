import { combineReducers } from "redux";
import todoreducer from "./todoreducer";
import postreducer from "./postreducer";



const rootreducer=combineReducers({todoreducer,postreducer})
export default rootreducer