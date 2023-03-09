import { GET_POSTS } from "../actiontypes/posttype";

const initialState = {
    posts:[]
}

const postreducer= (state = initialState, { type, payload }) => {
 switch (type) {
    case GET_POSTS:
        
       return{...state,posts:payload}
 
    default:
        return state
 }
}
export default postreducer