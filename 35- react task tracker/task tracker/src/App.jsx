import React, { useState } from 'react'
import TodoList from './components/TodoList.jsx'

import HttpClient from "./http/HttpClient"; 
import { useEffect } from "react";


const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const getTodos = () => {
    HttpClient.get("/todos")
      .then((response) => {
        console.log("Response:", response.data);
        setTodos(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };
  const hundleChange = (e) => {
    setTodoText(e.target.value);
  };

  const hundleAdd = () => {
    const newTodo={
   id: todos.length + 1,
   title: todoText,
   completed: false
    }
   setTodos([...todos, newTodo]);


   const deleteTodo = (id) => {
    setTodos[todos.filter((todo) => todo.id !== id)];
  };

    HttpClient.post("/todos", newTodo)
      .then((response) => {
        console.log("Todo added:", response.data);
        setTodos([...todos, response.data]);
        setTodoText("");
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  useEffect(getTodos, []);
  return (
    <div>
      <div>
        <input
          value={todoText}
          onChange={hundleChange}
          type="text"
        />
        <button
        onClick={hundleAdd}>Add</button>
      </div>
      <div>
        <TodoList  
          todos={todos}
          onDeleteTodo={deleteTodo}
            />  
      </div>
    </div>
    
  )
}

export default App
