/** @format */

import express, { Application, json, Request, Response } from "express";
import { todos } from "./data.json";
import cors from "cors"; // npm i cors @types/cors
const PORT = 8000;
const app: Application = express();
app.use(cors()); // tambahan
app.use(json());
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Todo API");
});

app.get("/todos", (req: Request, res: Response) => {
  const { tab } = req.query;
  const filtered = todos.filter((_) => {
    if (tab == "completed") return _.completed;
    if (tab == "active") return !_.completed;
    return _;
  });
  res.send({
    message: "fetch todos",
    data: filtered,
  });
});

app.post("/todos", (req: Request, res: Response) => {
  const id = todos[todos.length - 1].id + 1; //4

  if (!req.body.todo) {
    res.status(500);
    res.send({
      message: "invalid todo",
    });
  }
  const newData = {
    id, // 4
    todo: req.body.todo as string, // maka naspad
    completed: false,
  };
  todos.push(newData); //data baru disimpan ke source data
  res.status(201);
  res.send({
    message: "new todo has been added",
  });
});

app.delete("/todos/:id", (req: Request, res: Response) => {
  const index = todos.findIndex((_) => _.id == Number(req.params.id));
  todos.splice(index, 1);
  res.send({
    message: "todos has been deleted",
  });
});

app.delete("/todos", (req: Request, res: Response) => {
  const indexes: number[] = todos.reduce(
    (combined: number[], _, i: number) =>
      _.completed ? [...combined, i] : combined,
    []
  ); //[0]=> [0,2]

  indexes.reverse().forEach((index) => {
    todos.splice(index, 1);
  });

  res.send({
    message: "todos has been deleted",
  });
});

app.patch("/todos/:id", (req: Request, res: Response) => {
  const index = todos.findIndex((_) => _.id == Number(req.params.id));
  todos[index] = { ...todos[index], completed: !todos[index].completed };
  res.send({
    message: "update todos",
  });
});

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
