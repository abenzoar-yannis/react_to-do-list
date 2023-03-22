/* ./src/components/TaskCreator.js
this is the component to render the form for create a task
*/

import { useContext } from "react";
import DataContext from "../context/DataContext"; // Import the DataContext

/* --- IMPORTS Of COMPONENTS --- */
import TitleInput from "./TitleInput";
import StartDateInput from "./StartDateInput";
import EndDateInput from "./EndDateInput";
import DescriptionInput from "./DescriptionInput";

import { FaPlus } from "react-icons/fa";

/* Render the form for create new task */
const TaskCreator = () => {
  /* CONTEXT IMPORTS */
  const { createNewTask, setCreateNewTask, handleNewTask, resetState } =
    useContext(DataContext);

  return (
    <section id="task-creator">
      {!createNewTask && (
        <div
          id="task-creator-opener"
          className="secondary-header"
          onClick={() => setCreateNewTask(true)}
        >
          Créer une nouvelle tâche ?
          <br />
          <FaPlus />
        </div>
      )}
      {createNewTask && (
        <div>
          <div className="secondary-header">
            <h2>Nouvelle tâche !</h2>
          </div>
          <form
            id="task-creator-form"
            onSubmit={(event) => {
              handleNewTask(event);
              setCreateNewTask(false);
            }}
          >
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
            <div className="task-creator-buttons">
              {/* Render a submit button for the form */}
              <button className="valid-button" type="submit">
                Ajouter
              </button>

              <button
                className="not-valid-button"
                type="cancel"
                onClick={() => {
                  setCreateNewTask(false);
                  resetState();
                }}
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

/* Export the component as default */
export default TaskCreator;
