/* ./src/components/CreateTask.js
this is the component to render the form for create a task
*/

import { useContext } from "react";
import DataContext from "../context/DataContext"; // Import the DataContext

/* --- IMPORTS Of COMPONENTS --- */
import TitleInput from "./TitleInput";
import StartDateInput from "./StartDateInput";
import EndDateInput from "./EndDateInput";
import DescriptionInput from "./DescriptionInput";

/* Render the form for create new task */
const CreateTask = () => {
  /* CONTEXT IMPORTS */
  const { handleNewTask } = useContext(DataContext);

  return (
    <div>
      <h2>Créer une nouvelle tâche ?</h2>
      <form id="create-task-form" onSubmit={handleNewTask}>
        {/* Call the handleNewTask function when the form is submitted */}
        <TitleInput label="Titre de la tâche" />
        {/* Render the TitleInput component with a label prop */}
        <br />
        <StartDateInput label="Quand la tâche doit elle commencer ?" />
        {/* Render the StartDateInput component with a label prop */}
        <br />
        <EndDateInput label="Quand la tâche doit elle ce terminer ?" />
        {/* Render the EndDateInput component with a label prop */}
        <br />
        <DescriptionInput label="Ajouter une description à votre tâche ?" />
        {/* Render the DescriptionInput component with a label prop */}
        <br />
        <button className="valid-button" type="submit">
          Créer la nouvelle tâche
        </button>
        {/* Render a submit button for the form */}
      </form>
    </div>
  );
};

/* Export the component as default */
export default CreateTask;
