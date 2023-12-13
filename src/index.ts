import dotenv from "dotenv";
import express, { Express, Request, Response, } from "express";
import { PrismaClient } from "@prisma/client";
import { json } from "stream/consumers";
dotenv.config();


const app: Express = express();
const port = 3005;
const prisma = new PrismaClient();

app.use(express.json);

app.get("/", (req: Request, res: Response) => {
  console.log("tesr")
  res.send("1");
});

app.get("/get", async (req: Request, res: Response, next) => {
  console.log("tesr")
  const todos = await prisma.toDo.findMany();
  res.json({todos})
});

// app.post("/po", async (req: Request, res: Response) => {
//   console.log("tesr")
//   const todos = await prisma.toDo.create({
//     data: {id:1, ...req.body}
//   });
//   res.json({todos})
// });

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});