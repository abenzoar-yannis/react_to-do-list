// import "./App.css";
import TaskCreator from "./components/TaskCreator";
import TaskList from "./components/TaskList";

function App() {
  return (
    <main>
      <header>
        <h1>Liste de Tâches</h1>
      </header>
      <TaskCreator />
      <TaskList />
    </main>
  );
}

export default App;
