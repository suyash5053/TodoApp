import mongoose from "mongoose";
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URL);

const TodoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todo", TodoSchema);

module.export = { todo };
