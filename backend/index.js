const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
const port = 3000;
const { todo } = require("./db");

app.use(express.json());

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.parse(createPayload);
  if (!parsedPayload.success) {
    res.status(400).json({
      msg: "Wrong inputs provided",
    });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.status(201).json({
    msg: "Todo created",
  });
});

app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.parse(updatePayload);
  if (!parsedPayload.success) {
    res.status(400).json({
      msg: "Wrong inputs provided",
    });
    return;
  }
  todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
