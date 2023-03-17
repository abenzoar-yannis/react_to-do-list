/* ./src/context/DataContext.js
this files content the context and Data Provider for the App
*/

import { createContext, useState } from "react";

/* --- IMPORTS UTILS FUNCTIONS --- */
const { unixTimestamp } = require("../utils/unixTimestamp");
const { currentDate } = require("../utils/currentDate");
const { dateFormat } = require("../utils/dateFormat");
const { storageTasks } = require("../utils/storageTasks");
const { handleIndex } = require("../utils/handleIndex");

/* ensures the validity of a date for the date inputs */
function validDate(date) {
  const regexToISOString = new RegExp(
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{2}\s\d{4}\s\d{2}:\d{2}:\d{2}\sGMT[+-]\d{4}.*$/
  );
  return regexToISOString.test(date);
}

/* --- CREATE CONTEXT --- */
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  /* --- --- --- STATE CREATION --- --- --- */

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [title, setTitle] = useState(""); // state to hold the title of the task
  const [createdAt, setCreatedAt] = useState(new Date().getTime()); // state to hold the timestamp when the task is created
  const [startDate, setStartDate] = useState(null); // state to hold the start date of the task
  const [endDate, setEndDate] = useState(null); // state to hold the end date of the task
  const [description, setDescription] = useState(""); // state to hold the description of the task

  const [deleteAllTask, setDeleteAllTask] = useState(false); // Boolean to track if confirmation dialog should be displayed or not for delete all task
  const [deleteOneTask, setDeleteOneTask] = useState(false); // Boolean to track if confirmation dialog should be displayed or not for delete one task
  const [whatId, setWhatId] = useState(null); // Object that tracks which task was clicked

  /* --- --- --- UTILS FUNCTIONS --- --- --- */

  /* EXPAND/COLAPSE TASK */

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].expanded = !newTasks[index].expanded;
    setTasks(newTasks);
    // storageTasks(newTasks);
  };

  /* RESET STATE */
  const resetState = () => {
    setTitle("");
    setStartDate(null);
    setEndDate(null);
    setDescription("");
  };

  /* --- --- --- MAIN FUNCTIONS --- --- --- */

  /* --- ADD TASK --- */
  /* Function to add a new task to the task list */
  const newTasks = (newTask) => {
    // Copy the tasks list
    const tasksList = tasks;
    // Add the new task to the tasks list
    tasksList.push(newTask);
    // Update the tasks state with the updated tasks list
    setTasks(tasksList);
    // Update the tasks in local storage
    storageTasks(tasksList);
  };

  /* Function to handle the submission of a new task */
  const handleNewTask = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Set the createdAt state to the current date and time
    setCreatedAt(currentDate);
    // Generate a unique ID for the new task
    let id = currentDate();

    // Create a new task object with the form data and default values
    const newTask = {
      id,
      title,
      createdAt,
      startDate,
      endDate,
      description,
      isChecked: false,
      // expanded: false,
    };

    // Add the new task to the task list
    newTasks(newTask);
    // Reset the form state to its default values
    resetState();
  };

  /* --- CHECKED/UNCHECKED --- */
  /* Toggle the completion status of a task */
  const toggleTaskCompletion = (id) => {
    // Find the task to toggle
    const taskToToggle = tasks.find((task) => task.id === id);
    // Create a new task object with updated isChecked value
    const updatedTask = { ...taskToToggle, isChecked: !taskToToggle.isChecked };
    // Create a new array with the updated task object
    const updatedtasksList = tasks.map((task) =>
      task.id === id ? updatedTask : task
    );
    // Update state with the updated tasks array
    setTasks(updatedtasksList);
    // Store updated tasks array in local storage
    storageTasks(updatedtasksList);
  };

  /* --- DELETE --- */
  /* Deletes a task from the list of tasks. */
  const deleteTask = (id) => {
    // Create a copy of the current tasks array.
    const updatedTasks = [...tasks];
    // Find the index of the task with the specified ID.
    const taskIndex = updatedTasks.findIndex((task) => task.id === id);
    // If the task was found, remove it from the array, update the state and local storage.
    if (taskIndex !== -1) {
      updatedTasks.splice(taskIndex, 1);
      setTasks(updatedTasks);
      storageTasks(updatedTasks);
    }
  };

  /* --- DELETE ALL --- */
  /* Clear ALL TASKS from the state and local storage. */
  const clearAllTasks = () => {
    // Clear tasks from the state
    setTasks([]);
    // Remove "tasks" key from the local storage
    localStorage.removeItem("tasks");
  };

  return (
    <DataContext.Provider
      value={{
        tasks,
        setTasks,
        title,
        setTitle,
        createdAt,
        setCreatedAt,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        description,
        setDescription,
        deleteOneTask,
        setDeleteOneTask,
        whatId,
        setWhatId,
        deleteAllTask,
        setDeleteAllTask,
        handleIndex,
        handleNewTask,
        unixTimestamp,
        dateFormat,
        toggleTask,
        toggleTaskCompletion,
        deleteTask,
        clearAllTasks,
        validDate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

/* Export the Context as default */
export default DataContext;
