const { handleIndex } = require("../utils/handleIndex");

/*
--- --- --- --- TEST handleIndex() --- --- --- --- 
*/

describe("handleIndex", () => {
  test("returns 'new-task' if index is falsy", () => {
    expect(handleIndex(null)).toBe("new-task");
    expect(handleIndex(undefined)).toBe("new-task");
    expect(handleIndex(false)).toBe("new-task");
    expect(handleIndex("")).toBe("new-task");
    expect(handleIndex(0)).toBe("new-task");
  });

  test("returns the index if it is truthy", () => {
    expect(handleIndex(1)).toBe(1);
    expect(handleIndex("task-2")).toBe("task-2");
    expect(handleIndex(true)).toBe(true);
    expect(handleIndex([])).toEqual([]);
  });
});
