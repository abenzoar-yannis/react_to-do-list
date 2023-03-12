/* Stores the tasks list in the local storage */
export function storageTasks(tasksList) {
  if (!Array.isArray(tasksList)) {
    throw new TypeError("tasksList must be an array");
  }
  localStorage.setItem("tasks", JSON.stringify(tasksList));
}
