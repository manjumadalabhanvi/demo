import React from "react";
import TodoItem from "./TodoItem";

// TodoList component receives the todo list and handler functions via props
const TodoList = ({ todos, handleEdit, handleDelete, handleToggle }) => {
  return (
    <div className="mt-6 w-[60%] m-auto">
      {/* Conditional rendering when no todos are available */}
      {todos.length === 0 ? (
        <p className="text-center text-gray-300">No tasks yet!</p>
      ) : (
        // Dynamically render todos using map()
        todos.map((todo) => (
          <TodoItem
            key={todo.id} // Unique key for each todo item
            todo={todo} // Pass individual todo data
            handleEdit={handleEdit} // Pass edit handler
            handleDelete={handleDelete} // Pass delete handler
            handleToggle={handleToggle} // Pass toggle handler
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
