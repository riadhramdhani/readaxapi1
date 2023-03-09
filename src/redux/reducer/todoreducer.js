import { ADD_TODO, DELETE_TODO, EDIT_TODO, ISCOMPLIT } from "../actiontypes/totdosTypes";

const initialState = {
    todos:[]
}

const todoreducer= (state = initialState, { type, payload }) => {
 
   switch (type) {
    case ADD_TODO:
        return {...state,todos:[...state.todos,payload]}
        case DELETE_TODO:
        
        return {...state,todos:state.todos.filter((el)=>el.id !=payload)}
        case EDIT_TODO:
       
        return{...state,todos:state.todos.map((el)=>el.id==payload.id ?{...el,text:payload.data}:el)}
        case ISCOMPLIT:
        return{...state,todos:state.todos.map((el)=>el.id==payload ?{...el,iscomplit:!el.iscomplit}:el)}
    default:
        return state
   }
}
export default todoreducer