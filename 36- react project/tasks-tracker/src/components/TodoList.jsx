import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onDeleteTodo, toggleTodoCompletion }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo deleteTodo={onDeleteTodo} key={index} todo={todo} onToggle={toggleTodoCompletion} />
      ))}
    </div>
  );
};

export default TodoList;
