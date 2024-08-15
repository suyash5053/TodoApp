import { useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);
  function fetchTodos() {
    fetch("http://localhost:3000/todos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });
  }
  return (
    <div>
      <button onClick={fetchTodos}>Fetch Todos</button>
    </div>
  );
}

export default Todos;
