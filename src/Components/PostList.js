import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_posts } from '../redux/action/Postaction'
import Addpost from './Addpost'
import PostCard from './PostCard'

const PostList = () => {
    const dispatch=useDispatch()
    useEffect(() => {
    
    dispatch(get_posts())
      
    }, [dispatch])
    
    const posts=useSelector((state)=>state.postreducer.posts)
    console.log("posts",posts)
  return (
    <div>
        <Addpost/>
        {posts.map((el)=><PostCard el={el} key={el.id}/>)}</div>
  )
}

export default PostList