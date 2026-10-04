import express, { json } from "express";
import authRouters from "./routes/auth.routes.js";

const app = express();

app.use(express.json());
app.use("/api/auth", authRouters);

export { app };
