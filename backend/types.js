import z from "zod";

const CreateTodo = z.object({
  title: z.string(),
  description: z.string(),
});

const CompleteTodo = z.object({
  id: z.string(),
});

export { CreateTodo, CompleteTodo };
