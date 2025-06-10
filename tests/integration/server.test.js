const request = require("supertest");
const app = require("../../app/server");

describe("Integration tests for math endpoints", () => {
  test("GET /add", async () => {
    const res = await request(app).get("/add?a=2&b=3");
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(5);
  });

  test("GET /subtract", async () => {
    const res = await request(app).get("/subtract?a=5&b=2");
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(3);
  });

  test("GET /multiply", async () => {
    const res = await request(app).get("/multiply?a=4&b=5");
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(20);
  });

  test("GET /divide", async () => {
    const res = await request(app).get("/divide?a=10&b=2");
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(5);
  });

  test("GET /divide by zero", async () => {
    const res = await request(app).get("/divide?a=10&b=0");
    expect(res.status).toBe(400);
    expect(res.body.error).toBe("Division by zero");
  });
});