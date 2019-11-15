const request = require("supertest");
const server = require("./server");

describe("server", () => {
  test("the db env is testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("register endpoint", () => {
    test("Should return 401 when no credentials provided", async () => {
      const response = await request(server).post("/api/auth/register");
      expect(response.status).toBe(401);
    });
    test("Should return status 201 when credentials provided", async () => {
      const response = await request(server)
        .post("/api/auth/register")
        .send({ username: "Megan", password: "1234" });
      expect(response.status).toBe(201);
    });
  });

  describe("login endpoint", () => {
    test("Should return 500 when no credentials provided", async () => {
      const response = await request(server).post("/api/auth/login");
      expect(response.status).toBe(500);
    });
    test("Should return 200 when  credentials provided", async () => {
      const response = await request(server)
        .post("/api/auth/login")
        .send({ username: "Megan", password: "1234" });
      expect(response.status).toBe(200);
    });
  });

  describe("jokes endpoint", () => {
    test("Should return 401 when no token provided", async () => {
      const response = await request(server).get("/api/jokes");
      expect(response.status).toBe(401);
    });
  });
});
