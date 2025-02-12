import request from "supertest";
import app from "../src/app";
import productService from "../src/services/ProductService";

describe("ProductController", () => {

  test("GET /products - should return all products", async () => {
    jest.spyOn(productService, "getAllProducts").mockResolvedValue([
      { id: 1, name: "Laptop", price: 1200 }
    ]);

    const res = await request(app).get("/products");

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.products.length).toBe(1);
    expect(res.body.products[0].name).toBe("Laptop");

    globalThis.lastResponse = { testName: "GET /products", response: res };
  });

  test("GET /products/:id - should return a product", async () => {
    jest.spyOn(productService, "getProductById").mockResolvedValue({
      id: 1,
      name: "Laptop",
      price: 1200
    });

    const res = await request(app).get("/products/1");

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.product.id).toBe(1);
    expect(res.body.product.name).toBe("Laptop");

    globalThis.lastResponse = { testName: "GET /products/:id", response: res };
  });

  test("POST /products - should create a product", async () => {
    jest.spyOn(productService, "createProduct").mockResolvedValue({
      id: 2,
      name: "Phone",
      price: 800
    });

    const res = await request(app).post("/products").send({
      name: "Phone",
      price: 800,
    });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.product.name).toBe("Phone");

    globalThis.lastResponse = { testName: "POST /products", response: res };
  });

  test("PUT /products/:id - should update a product", async () => {
    jest.spyOn(productService, "updateProduct").mockResolvedValue({
      id: 2,
      name: "Phone",
      price: 900
    });

    const res = await request(app).put("/products/2").send({
      name: "Phone",
      price: 900,
    });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.product.price).toBe(900);

    globalThis.lastResponse = { testName: "PUT /products/:id", response: res };
  });

  test("DELETE /products/:id - should delete a product", async () => {
    jest.spyOn(productService, "deleteProduct").mockResolvedValue({
      id: 2,
      name: "Phone",
      price: 800
    });

    const res = await request(app).delete("/products/2");

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.deletedProduct.name).toBe("Phone");

    globalThis.lastResponse = { testName: "DELETE /products/:id", response: res };
  });
});