const { unixTimestamp } = require("../utils/unixTimestamp");

/*
--- --- --- --- TEST unixTimestamp() --- --- --- --- 
*/
describe("unixTimestamp", () => {
  test("returns the correct Unix timestamp for a valid date string", () => {
    const date = "2022-03-05T07:30:00.000Z";
    const expected = 1646465400000; // Unix timestamp for March 4, 2022 at 12:30:00 PM UTC

    const result = unixTimestamp(date);

    expect(result).toBe(expected);
  });

  test("returns NaN for an invalid date string", () => {
    const date = "not a valid date string";

    const result = unixTimestamp(date);

    expect(result).toBeNaN();
  });

  test("returns a valid Unix timestamp for a date in the distant future", () => {
    const date = "2100-01-01T00:00:00.000Z";
    const expected = 4102444800000; // Unix timestamp for January 1, 2100 at 12:00:00 AM UTC

    const result = unixTimestamp(date);

    expect(result).toBe(expected);
  });

  test("returns a valid Unix timestamp for a date in the distant past", () => {
    const date = "1900-01-01T00:00:00.000Z";
    const expected = -2208988800000; // Unix timestamp for January 1, 1900 at 12:00:00 AM UTC

    const result = unixTimestamp(date);

    expect(result).toBe(expected);
  });

  test("returns NaN for an undefined input", () => {
    const date = undefined;

    const result = unixTimestamp(date);

    expect(result).toBeNaN();
  });

  test("returns 0 for a null input", () => {
    const date = null;

    const result = unixTimestamp(date);

    expect(result).toBe(0);
  });

  test("returns NaN for an empty string input", () => {
    const date = "";

    const result = unixTimestamp(date);

    expect(result).toBeNaN();
  });

  test("returns a valid Unix timestamp for a date with milliseconds", () => {
    const date = "2022-03-05T07:30:00.123Z";
    const expected = 1646465400123; // Unix timestamp for March 5, 2022 at 12:30:00.123 AM UTC

    const result = unixTimestamp(date);

    expect(result).toBe(expected);
  });

  test("returns the same Unix timestamp for a date and its equivalent in UTC format", () => {
    const date = "2022-03-05T07:30:00.000Z";
    const utcDate = "Sat, 05 Mar 2022 07:30:00 GMT";

    const result = unixTimestamp(date);
    const utcResult = unixTimestamp(utcDate);

    expect(result).toBe(utcResult);
  });
});
