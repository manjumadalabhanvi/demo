import React, { useState } from "react";

// TodoItem component receives data and functions via props
const TodoItem = ({ todo, handleEdit, handleDelete, handleToggle }) => {

  // Local state to track edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Local state to store edited text
  const [editText, setEditText] = useState(todo.text);

  // Save edited todo
  const handleSave = () => {
    // Prevent saving empty text
    if (editText.trim() === "") return;

    // Call parent function to update todo
    handleEdit(todo.id, editText);

    // Exit edit mode
    setIsEditing(false);
  };

  return (
    <div
      className={`flex justify-between items-center p-3 mb-2 rounded
        ${todo.completed ? "bg-green-700" : "bg-gray-700"} text-white`}
    >
      {/* Conditional rendering: input field in edit mode */}
      {isEditing ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="text-black px-2 py-1 rounded w-full"
        />
      ) : (
        // Display todo text
        <span
          onClick={() => handleToggle(todo.id)} // Toggle completed status
          className={`flex-1 cursor-pointer ${
            todo.completed ? "line-through opacity-60" : ""
          }`}
        >
          {todo.text}
        </span>
      )}

      {/* Action buttons */}
      <div className="flex gap-2 ml-4">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-600 px-2 rounded"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)} // Enable edit mode
            className="bg-yellow-500 px-2 rounded"
          >
            Edit
          </button>
        )}

        {/* Delete todo */}
        <button
          onClick={() => handleDelete(todo.id)}
          className="bg-red-600 px-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
