import express from "express";
import { getProducts, getProduct, createNewProducts, deleteProduct, updateProduct } from "../controllers/ProductController";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createNewProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;