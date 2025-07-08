import React, { useState } from "react";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [filter, setFilter] = useState("all");

  const handleChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleAdd = () => {
    if (!todoText.trim()) {
      alert("Please enter a todo item.");
      return;
    } 
    const newTodos = {
      id: todos.length + 1,
      content: todoText,
      isCompleted: false,
    };

    setTodos([...todos, newTodos]);

    setTodoText("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // This function is used to toggle the completion status of a todo item
  const toggleTodoCompletion = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));
  };
  const handleSelctFilter = (event) => {
    setFilter(event.target.value);
  };

  const filteredTodos = todos.filter((todo) => {
  if (filter === "completed") return todo.isCompleted;
  if (filter === "incomplete") return !todo.isCompleted;
  return true; 
});

  return (
    <div>
      <div>
        <select 
        onChange={handleSelctFilter}
        className="filter-select">
          <option value="" disabled selected>
            Filter Todos  
          </option>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <div>
        <input onChange={handleChange} value={todoText} type="text" />
        <button onClick={handleAdd}>Add</button>
      </div>
      <TodoList onDeleteTodo={deleteTodo} 
       //todos={todos}
        todos={filteredTodos}
        toggleTodoCompletion={toggleTodoCompletion} />
    </div>
  );
};

export default App;
