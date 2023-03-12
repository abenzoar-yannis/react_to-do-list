const { currentDate } = require("../utils/currentDate");

/*
--- --- --- --- TEST currentDate() --- --- --- --- 
*/

describe("currentDate", () => {
  test("returns a valid Unix timestamp", () => {
    const result = currentDate();

    expect(result).toBeGreaterThan(0);
  });

  test("returns a Unix timestamp within 10 seconds of the current time", () => {
    const now = new Date().getTime();
    const result = currentDate();

    expect(Math.abs(result - now)).toBeLessThan(10000);
  });
  test("returns a Unix timestamp", () => {
    const result = currentDate();

    expect(result).toBeDefined();
    expect(typeof result).toBe("number");
    expect(result).toBeGreaterThan(0);
  });

  test("returns the current Unix timestamp", () => {
    const now = new Date().getTime();
    const result = currentDate();

    expect(result).toBeCloseTo(now, -1); // allow for up to 100ms of difference due to test runtime
  });

  test("returns a different Unix timestamp when called again after a short delay", async () => {
    const timestamp1 = currentDate();
    await new Promise((resolve) => setTimeout(resolve, 100)); // wait for 100ms
    const timestamp2 = currentDate();

    expect(timestamp1).not.toBe(timestamp2);
  });
});
