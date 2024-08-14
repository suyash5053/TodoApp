import express, { json } from "express";
import { todo } from "./todo";

const app = express();
const port = 3000;

app.use(json());

app.get("/todoList", async (req, res) => {
  const todoList = await todo.find({});
  res.status(200).json(todoList);
});

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = app.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(400).json({
      message: "Invalid payload",
    });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.status(201).json({
    msg: "Todo Created Successfully",
  });
});

app.put("/todoCompleted", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = app.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(400).json({
      message: "Invalid payload",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.status(200).json({
    msg: "Todo Completed Successfully",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
