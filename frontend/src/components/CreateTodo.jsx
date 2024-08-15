import { useState } from "react";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: title,
              description: description,
              completed: false,
            }),
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

export default CreateTodo;
