import express from "express";
import { createUser, getAllUsers } from "../controllers/UserController";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getAllUsers);
router.post("/", createUser);

export default router;