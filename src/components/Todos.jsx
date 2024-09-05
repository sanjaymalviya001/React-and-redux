import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Todo list</h1>
      {todos.map((todo) => (
        <div>
          <li key={todo.id}>{todo.text}</li>
          <button
            onClick={() => {
              dispatch(removeTodo(todo.id));
            }}
          >
            delete todo
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
