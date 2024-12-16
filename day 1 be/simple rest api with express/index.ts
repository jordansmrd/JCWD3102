/** @format */

import express, { Application, json, Request, Response } from "express";
const PORT = 8000;
const server: Application = express();

server.use(json()); // agar bisa ambil body dari json

const users = [
  {
    id: 1,
    nama: "jhonny",
    email: "jhon123@mail.com",
  },
  {
    id: 2,
    nama: "budik",
    email: "budii@mail.com",
  },
  {
    id: "tiga",
    nama: "patrick",
    email: "patrick@mail.com",
  },
];

server.get("/api", (req: Request, res: Response) => {
  res.status(200); //default
  res.send({
    message: "hello this is rest api with express",
    query: req.query,
  });
});

server.get("/api/users", (req: Request, res: Response) => {
  const filtered = users.filter((_) =>
    _.nama.includes(String(req.query.nama || ""))
  );
  res.send({
    message: "fetch users",
    data: filtered,
  });
});

server.get("/api/users/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const user = users.find((_) => _.id == id);
  if (!user) {
    res.status(500);
    res.send({
      message: "user not found",
    });
    return;
  }

  res.status(200); //default
  res.send({
    message: "hello this is rest api with express",
    data: user,
  });
});

server.post("/api", (req: Request, res: Response) => {
  res.status(201); //default
  res.send({
    message: "ini post",
    data: req.body,
  });
});

server.patch("/api", (req: Request, res: Response) => {
  res.status(200); //default
  res.send("ini patch");
});

server.delete("/api/users/:id", (req: Request, res: Response) => {
  const index = users.findIndex((_) => _.id == req.params.id);
  users.splice(index, 1);
  res.status(200); //default
  res.send({ message: "delete user id " + req.params.id, data: users });
});

server.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
