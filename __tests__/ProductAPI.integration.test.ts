import request from "supertest";
import app from "../src/app";
import prisma from "../src/prismaClient"; // 실제 DB 접근

describe("🔹 Product API Integration Tests", () => {
  let createdProductId: number; // 생성된 Product ID 저장

  // ✅ 테스트 시작 전 데이터 초기화
  beforeEach(async () => {
    await prisma.product.deleteMany(); // 기존 데이터 삭제
    const createdProduct = await prisma.product.create({
      data: { name: "Laptop", price: 1200 },
    });
    createdProductId = createdProduct.id; // 생성된 ID 저장
  });

  // ✅ 테스트 종료 후 데이터 정리
  afterEach(async () => {
    await prisma.product.deleteMany();
  });

  // ✅ 1. 모든 제품 조회 테스트
  test("GET /products - should return all products", async () => {
    const res = await request(app).get("/products");

    console.log("\n✅ [GET /products] 응답 데이터:\n", res.body);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.products.length).toBe(1);
    expect(res.body.products[0].name).toBe("Laptop");
  });

  // ✅ 2. 특정 제품 조회 테스트
  test("GET /products/:id - should return a product", async () => {
    const res = await request(app).get(`/products/${createdProductId}`);

    console.log("\n✅ [GET /products/:id] 응답 데이터:\n", res.body);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.product.name).toBe("Laptop");
  });

  // ✅ 3. 새 제품 추가 테스트
  test("POST /products - should create a new product", async () => {
    const res = await request(app).post("/products").send({
      name: "Phone",
      price: 800,
    });

    console.log("\n✅ [POST /products] 응답 데이터:\n", res.body);

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.product.name).toBe("Phone");

    // 데이터가 실제로 DB에 저장되었는지 확인
    const productInDB = await prisma.product.findUnique({
      where: { id: res.body.product.id },
    });
    expect(productInDB).not.toBeNull();
    expect(productInDB?.name).toBe("Phone");
  });

  // ✅ 4. 제품 수정 테스트
  test("PUT /products/:id - should update a product", async () => {
    const res = await request(app).put(`/products/${createdProductId}`).send({
      name: "Gaming Laptop",
      price: 1500,
    });

    console.log("\n✅ [PUT /products/:id] 응답 데이터:\n", res.body);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.product.name).toBe("Gaming Laptop");

    // DB에서도 변경됐는지 확인
    const updatedProduct = await prisma.product.findUnique({
      where: { id: createdProductId },
    });
    expect(updatedProduct?.name).toBe("Gaming Laptop");
    expect(updatedProduct?.price).toBe(1500);
  });

  // ✅ 5. 제품 삭제 테스트
  test("DELETE /products/:id - should delete a product", async () => {
    const res = await request(app).delete(`/products/${createdProductId}`);

    console.log("\n✅ [DELETE /products/:id] 응답 데이터:\n", res.body);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);

    // DB에서 실제 삭제 확인
    const deletedProduct = await prisma.product.findUnique({
      where: { id: createdProductId },
    });
    expect(deletedProduct).toBeNull();
  });
});