const { dateFormat } = require("../utils/dateFormat");

/*
--- --- --- --- TEST dateFormat() --- --- --- --- 
*/

describe("dateFormat", () => {
  test("returns a formatted date string in French", () => {
    const date = new Date("2023-03-10T14:50:00.000Z"); // March 10th, 2023 at 14:50:00
    const result = dateFormat(date);
    expect(result).toBe("vendredi 10 mars 2023 à 15H50");
  });

  test("returns a different formatted date string for a different input date", () => {
    const date = new Date("2024-01-01T00:00:00.000Z"); // January 1st, 2024 at 00:00:00
    const result = dateFormat(date);
    expect(result).toBe("lundi 1 janvier 2024 à 1H00");
  });

  test("handles single-digit day of month correctly", () => {
    const date = new Date("2023-03-09T08:00:00.000Z"); // March 9th, 2023 at 08:00:00
    const result = dateFormat(date);
    expect(result).toBe("jeudi 9 mars 2023 à 9H00");
  });

  test("handles midnight correctly", () => {
    const date = new Date("2023-03-10T00:00:00.000Z"); // March 10th, 2023 at 00:00:00
    const result = dateFormat(date);
    expect(result).toBe("vendredi 10 mars 2023 à 1H00");
  });

  test("returns a string in the correct format", () => {
    const date = new Date("2023-03-06T12:34:56Z");
    const result = dateFormat(date);

    expect(result).toMatch(
      /^[a-z]{5,8} \d{1,2} [a-z]{3,9} \d{4} à \d{1,2}H\d{2}$/i
    );
  });

  test("returns the correct day of the week", () => {
    const date = new Date("2023-03-05T12:34:56Z");
    const result = dateFormat(date);

    expect(result).toMatch(/^dimanche /i);
  });

  test("returns the correct month", () => {
    const date = new Date("2023-03-06T12:34:56Z");
    const result = dateFormat(date);

    expect(result).toMatch(/ mars /i);
  });

  test("returns the correct year", () => {
    const date = new Date("2023-03-06T12:34:56Z");
    const result = dateFormat(date);

    expect(result).toMatch(/ 2023 /);
  });

  test("returns the correct hour", () => {
    const date = new Date("2023-03-06T11:34:56Z");
    const result = dateFormat(date);

    expect(result).toMatch(/ à 12H/);
  });

  test("returns the correct minute", () => {
    const date = new Date("2023-03-06T12:34:56Z");
    const result = dateFormat(date);

    expect(result).toMatch(/H34$/);
  });
});
