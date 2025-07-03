import React from 'react'

const Todo = ({todo, deleteTodo}) => {
  const handleDelete= () => {
    console.log('Delete todo:', todo.id)
    // Here you would typically call a function to delete the todo
  }
  return (
    <div>
      console.log(todo)
      <h2>Todo Item</h2>
      <h3>{todo.text}</h3>
      <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
    <TbTashXSilled onClick={handleDelete} />
    </div>
  )
}

export default Todo
