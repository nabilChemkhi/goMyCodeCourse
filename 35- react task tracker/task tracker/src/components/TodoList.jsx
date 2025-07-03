import React from 'react'


const TodoList = ({todos,onDeleteTodo}) => {
  return (
    <div>
      {todos.map((todo,index) => (
        <Todo 
        key={index} 
        todo={todo} 
        deleteTodo={onDeleteTodo}
        />
      ))}
      
    </div>
  )
}

export default TodoList
