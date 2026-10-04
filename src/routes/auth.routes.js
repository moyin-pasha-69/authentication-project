import express from "express";
import * as authControllers from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/register", authControllers.registerUser);

export default router;
