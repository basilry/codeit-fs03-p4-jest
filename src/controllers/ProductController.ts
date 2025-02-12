import { Request, Response } from "express";
import productService from "../services/ProductService";

const getProducts = async (req: Request, res: Response) => {
  const products = await productService.getAllProducts();
  res.status(200).json({ success: true, products });
};

const getProduct = async (req: Request, res: Response) => {
  const product = await productService.getProductById(Number(req.params.id));
  if (!product) {
    res.status(404).json({ success: false, message: "Product not found" });
    return
  }
  res.status(200).json({ success: true, product });
};

const createNewProducts = async (req: Request, res: Response) => {
  const { name, price } = req.body;
  const newProduct = await productService.createProduct(name, price);
  res.status(201).json({ success: true, product: newProduct });
};

const updateProduct = async (req: Request, res: Response) => {
  const { name, price } = req.body;
  const updatedProduct = await productService.updateProduct(Number(req.params.id), name, price);

  if (!updatedProduct) {
    res.status(404).json({ success: false, message: "Product not found" });
    return
  }
  res.status(200).json({ success: true, product: updatedProduct });
};

const deleteProduct = async (req: Request, res: Response) => {
  const deletedProduct = await productService.deleteProduct(Number(req.params.id));
  if (!deletedProduct) {
    res.status(404).json({ success: false, message: "Product not found" });
    return
  }
  res.status(200).json({ success: true, deletedProduct });
};

export { getProducts, getProduct, createNewProducts, updateProduct, deleteProduct };