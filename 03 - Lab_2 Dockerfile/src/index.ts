import dotenv from "dotenv";
import express, { Request, Response } from "express";

dotenv.config();

const server = express();

server.get("/health-check", (request: Request, response: Response) => {
  response.json({ Message: "Application is running!" });
});

server.get("/api/users", (request: Request, response: Response) => {
  response.json(getUsers());
});

server.listen(process.env.PORT, () =>
  console.log(`Listening on http://localhost:${process.env.PORT}`)
);

function getUsers() {
  return [
    { userName: "user1@gmail.com", age: 22, city: "Tel-Aviv" },
    { userName: "user2@gmail.com", age: 22, city: "Jerusalem" },
    { userName: "user3@gmail.com", age: 22, city: "Haifa" },
  ];
}
