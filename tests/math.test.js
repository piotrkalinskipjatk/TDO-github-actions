const { add, subtract, multiply, divide } = require("../app/math");

describe("Math functions", () => {
  test("adds numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtracts numbers", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test("multiplies numbers", () => {
    expect(multiply(4, 5)).toBe(20);
  });

  test("divides numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("throws on division by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero");
  });
});
