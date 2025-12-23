import React, { useState } from "react";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";

// App component is the main/root component
function App() {

  // State to store the list of todo items
  const [todos, setTodos] = useState([]);

  // State to store the input field value
  const [inputValue, setInputValue] = useState("");

  // Handle input change event
  const handleChange = (e) => setInputValue(e.target.value);

  // Add a new todo item
  const handleAdd = () => {
    // Prevent adding empty todos
    if (inputValue.trim() === "") return;

    // Update todo list using previous state
    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue, completed: false },
    ]);

    // Clear input field after adding
    setInputValue("");
  };

  // Edit an existing todo item
  const handleEdit = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  // Delete a todo item
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle completed status of a todo item
  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="bg-gray-900 min-h-screen py-10">
      {/* Header component */}
      <Header />

      {/* Form to add new todo */}
      <form
        className="flex justify-center gap-3 bg-gray-400 w-[60%] m-auto py-6 rounded-xl"
        onSubmit={(e) => e.preventDefault()} // Prevent page reload
      >
        <input
          type="text"
          placeholder="Enter a task"
          className="w-[60%] px-3 py-2 rounded"
          value={inputValue}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={handleAdd} // Add todo on click
          className="bg-red-900 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </form>

      {/* TodoList component with props */}
      <TodoList
        todos={todos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    </div>
  );
}

export default App;
