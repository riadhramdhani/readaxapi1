import { ADD_TODO, DELETE_TODO, EDIT_TODO, ISCOMPLIT } from "../actiontypes/totdosTypes"

export const add_todo=(data)=>{
    return({type:ADD_TODO,payload:data})
}
export const delete_todo=(id)=>{
    return({type:DELETE_TODO,payload:id})
}
export const edit_todo=(id,data)=>{
    return({type:EDIT_TODO,payload:{id,data}})
}
export const todo_iscomplit=(id)=>{
    return({type:ISCOMPLIT,payload:id})
}