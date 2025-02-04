import express from "express";
import { login, logout, sigup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/sigup",sigup);

router.post("/login",login);

router.post("/logout",logout);

export default router