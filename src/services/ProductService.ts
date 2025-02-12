import { Product } from "../models/Product";

let products: Product[] = [
  { id: 1, name: "Laptop", price: 1200 },
];

const getAllProducts = async (): Promise<Product[]> => {
  return products;
};

const getProductById = async (id: number): Promise<Product | null> => {
  return products.find((p) => p.id === id) || null;
};

const createProduct = async (product: Omit<Product, "id">): Promise<Product> => {
  const newProduct: Product = { id: Date.now(), ...product };
  products.push(newProduct);
  return newProduct;
};

const updateProduct = async (id: number, product: Omit<Product, "id">): Promise<Product | null> => {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) {
    return null;
  }
  products[index] = { id, ...product };
  return products[index];
};

const deleteProduct = async (id: number): Promise<Product | null> => {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) {
    return null;
  }
  return products.splice(index, 1)[0];
};

// ✅ Jest 테스트를 위해 `resetProducts` 추가
const resetProducts = () => {
  products = [
    { id: 1, name: "Laptop", price: 1200 },
  ];
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  resetProducts,
};