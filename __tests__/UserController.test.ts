import request from "supertest";
import { app, server } from "../src/app";
import * as UserController from "../src/controllers/UserController";

jest.mock("../src/controllers/UserController");

describe("UserController", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll((done) => {
    if (server) {
      server.close(done); // 서버가 실행 중일 때만 close
    } else {
      done(); // server가 null이면 바로 종료
    }
  });

  test("GET /api/users - should return all users", async () => {
    (UserController.getAllUsers as jest.Mock).mockImplementation((req, res) => {
      res.json({
        success: true,
        users: [{ id: 1, name: "John Doe", email: "john@example.com" }],
      });
    });

    const res = await request(app).get("/api/users");

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.users.length).toBe(1);
    expect(res.body.users[0].name).toBe("John Doe");
  });

  test("GET /api/users/:id - should return a user", async () => {
    (UserController.getUserById as jest.Mock).mockImplementation((req, res) => {
      res.json({
        id: 1,
        name: "John Doe",
        email: "john@example.com",
      });
    });
  });

  test("POST /api/users - should create a user", async () => {
    (UserController.createUser as jest.Mock).mockImplementation((req, res) => {
      res.status(201).json({
        success: true,
        user: { id: 2, name: "Jane Doe", email: "jane@example.com" },
      });
    });

    const res = await request(app).post("/api/users").send({
      name: "Jane Doe",
      email: "jane@example.com",
    });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.user.name).toBe("Jane Doe");
  });
});