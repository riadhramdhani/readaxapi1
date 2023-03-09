import  axios  from "axios"
import { GET_POSTS } from "../actiontypes/posttype"

export const get_posts=()=>async(dispatch)=>{
    try {
        const res=await axios.get("http://192.168.2.252:3333/api/getallpost")
        dispatch({type:GET_POSTS,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}
export const add_posts=(data)=>async(dispatch)=>{
    try {
        await axios.post("http://192.168.2.252:3333/api/createnewpost",data)
        dispatch(get_posts())
    } catch (error) {
        console.log(error)
    }
}
export const edit_posts=(id,data)=>async(dispatch)=>{
    try {
        await axios.put(`http://192.168.2.252:3333/api/updatepost/${id}`,data)
        dispatch(get_posts())
    } catch (error) {
        console.log(error)
    }
}
export const delete_posts=(id)=>async(dispatch)=>{
    try {
        await axios.delete("http://192.168.2.252:3333/api/deletepost/"+id)
        dispatch(get_posts())
    } catch (error) {
        console.log(error)
    }
}
