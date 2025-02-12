import express from "express";
import { createUser, getAllUsers, getUserById } from "../controllers/UserController";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);

export default router;