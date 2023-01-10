import React from 'react'
import TodoItem from "./TodoItem";

const Todos = (props) => {
  let Mystyle = {
    minHeight: "15vh"
  }

  return (
    <div className="container my-3 " style={Mystyle}>
      <h3 > Todos List</h3>
      {props.todos.length === 0 ? "Todos List is Empty" :
        props.todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.sno} ondelete={props.ondelete} />
        })
      }

    </div>
  )
}

export default Todos

