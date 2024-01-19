import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./db";
import getRoom from "./routes/route";
import bookRoom from "./routes/book";
import createinvoice from "./routes/invoice";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.use("/api", getRoom);
app.use("/api/", bookRoom);
app.use("/api/", createinvoice);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at PORT:${port}`);
  connectDB();
});
