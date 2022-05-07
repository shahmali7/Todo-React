import React from 'react'
import Todo from './todo'

function Todos({todos,setTodos,filterTodo}) {
  return (
    <div>
        <ul>
         {filterTodo.map((todo)=>(
             <Todo
                text={todo.text}
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
             />
         ))}
        </ul>
    </div>
  )
}

export default Todos