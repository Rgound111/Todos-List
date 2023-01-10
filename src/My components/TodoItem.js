import React from 'react'

const TodoItem = ({ todo , ondelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p> {todo.desc}</p>
      <button className="btn btn-danger btn-sm"  onClick={()=>{ondelete(todo)}}>Delete</button> <hr/>
    </div>
  )
}

export default TodoItem

