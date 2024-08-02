import { useState } from "react";
import { addTodo } from "./TodoSlice";
import { useDispatch } from "react-redux";





const TodoInput = () => {

const [text , setText]=useState('')

const dispatch=useDispatch()

const handleAddTodo =()=>{
if(text.trim()){
    dispatch(addTodo(text))
    setText('')
}
}

  return (
    <div>
     <input type="text" onChange={(e)=>setText(e.target.value)} placeholder="add new todo" value={text} />

     <button onClick={handleAddTodo}>add todo</button>


    </div>
  )
}

export default TodoInput
