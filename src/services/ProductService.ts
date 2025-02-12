import prisma from "../prismaClient";


const getAllProducts = async () => {
  return await prisma.product.findMany();
};

const getProductById = async (id: number) => {
  return await prisma.product.findUnique({ where: { id } });
};

const createProduct = async (name: string, price: number) => {
  return await prisma.product.create({
    data: { name, price },
  });
};

const updateProduct = async (id: number, name: string, price: number) => {
  return await prisma.product.update({
    where: { id },
    data: { name, price },
  });
};

const deleteProduct = async (id: number) => {
  return await prisma.product.delete({ where: { id } });
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};