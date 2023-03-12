// import "./App.css";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <h1>Ma to-do list</h1>
      <CreateTask />
      <TaskList />
    </div>
  );
}

export default App;
