import request from "supertest";
import { app } from "../src/app";

describe("User API", () => {
  test("GET /users - 사용자 목록 조회", async () => {
    // API 요청 보내기
    const response = await request(app).get("/users");

    // 응답 상태 코드 확인
    expect(response.status).toBe(200);

    // 응답 데이터 확인
    expect(response.body.success).toBe(true);
    expect(Array.isArray(response.body.users)).toBe(true);
    
    // 기본적으로 사용자 목록이 1명 이상 존재한다고 가정
    expect(response.body.users.length).toBeGreaterThan(0);
    expect(response.body.users[0]).toHaveProperty("id");
    expect(response.body.users[0]).toHaveProperty("name");
    expect(response.body.users[0]).toHaveProperty("email");
  });

  test("GET /users/:id - 특정 사용자 조회", async () => {
    // 존재하는 ID로 요청
    const response = await request(app).get("/users/1");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      id: 1,
      name: "John Doe",
      email: "john@example.com",
    });
  });

  test("POST /users - 새로운 사용자 추가", async () => {
    const newUser = { name: "Jane Doe", email: "jane@example.com" };

    const response = await request(app).post("/users").send(newUser);

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.user).toHaveProperty("id");
    expect(response.body.user.name).toBe("Jane Doe");
    expect(response.body.user.email).toBe("jane@example.com");
  });
});