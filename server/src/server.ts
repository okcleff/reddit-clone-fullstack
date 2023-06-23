import "reflect-metadata";

import express from "express";
import morgan from "morgan";
import { AppDataSource } from "./data-source";
import authRoutes from "./routes/auth";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const origin = process.env.ORIGIN;
app.use(
  cors({
    origin,
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));
console.log(origin);

app.get("/", (_, res) => res.send("running"));
app.use("/api/auth", authRoutes);

let port = process.env.PORT;

app.listen(port, async () => {
  console.log(`server running at ${process.env.APP_URL}`);

  AppDataSource.initialize()
    .then(() => console.log("database initialized"))
    .catch((error) => console.log(error));
});
