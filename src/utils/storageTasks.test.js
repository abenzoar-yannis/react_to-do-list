const { storageTasks } = require("../utils/storageTasks");

/*
--- --- --- --- TEST storageTasks() --- --- --- --- 
*/

describe("storageTasks", () => {
  beforeEach(() => {
    // Reset local storage before each test
    localStorage.clear();
  });

  test("stores tasks in local storage", () => {
    const tasks = ["task 1", "task 2", "task 3"];
    storageTasks(tasks);
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    expect(storedTasks).toEqual(tasks);
  });

  test("overwrites existing tasks in local storage", () => {
    const originalTasks = ["original task"];
    const newTasks = ["new task"];
    localStorage.setItem("tasks", JSON.stringify(originalTasks));
    storageTasks(newTasks);
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    expect(storedTasks).toEqual(newTasks);
  });

  test("does not store empty task list in local storage", () => {
    const emptyTasks = [];
    storageTasks(emptyTasks);
    const storedTasks = localStorage.getItem("tasks");
    expect(storedTasks).toBe("[]");
  });

  test("throws an error if tasks list is not an array", () => {
    const tasks = "not an array";
    expect(() => storageTasks(tasks)).toThrow(TypeError);
  });

  test("throws an error if local storage is full", () => {
    // Fill up local storage with a large string
    const data = "a".repeat(4999990);
    localStorage.setItem("data", data);

    const tasks = ["task 1", "task 2", "task 3"];
    expect(() => storageTasks(tasks)).toThrow(Error);
  });
});
