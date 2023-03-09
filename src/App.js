
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import PostList from './Components/PostList';
import { add_todo, delete_todo, edit_todo, todo_iscomplit } from './redux/action/TodoAction';

function App() {
  const dispatch=useDispatch()
  const todos=useSelector((state)=>state.todoreducer.todos)
  const [text,setText]=useState("")
  const [iscomplit,setIscomplit]=useState(false)
  const [clickedid,setClikedID]=useState('')
 
  return (
    <div className="App">
    <input type="text" onChange={(e)=>setText(e.target.value)}/> 
    <button onClick={()=>dispatch(add_todo({id:Math.random(),text,iscomplit}))}>Add</button>
    {todos?.map((el)=><div>
    { clickedid==el.id ? <div><input type="text" onChange={(e)=>setText(e.target.value)} value={text}/> 
      <button onClick={()=>dispatch(edit_todo(el.id,text),setClikedID(""))}>save</button></div> 
    : <h1>{el?.text}</h1> }
       <button onClick={()=>dispatch(setClikedID(el.id))}>edit</button>
       <button onClick={()=>dispatch(delete_todo(el.id))}>delete</button>
       <button onClick={()=>dispatch(todo_iscomplit(el.id))}>isComplit</button>
    </div>)}
    <PostList/>
    </div>
  );
}

export default App;
