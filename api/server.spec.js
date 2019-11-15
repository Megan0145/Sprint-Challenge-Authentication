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
  });

  describe("login endpoint", () => {
    test("Should return 500 when no credentials provided", async () => {
      const response = await request(server).post("/api/auth/login");
      expect(response.status).toBe(500);
    });
  });
});
