/* ./src/components/TitleInput.js
this is the component to render the Title input
*/

import { useContext } from "react";
import DataContext from "../context/DataContext"; // Import the DataContext

/* This component renders a label and an input field for the title of a task */
const TitleInput = ({ label, index }) => {
  /* CONTEXT IMPORTS */
  const { title, setTitle, handleIndex } = useContext(DataContext);

  // Render a label element with a for attribute that corresponds to the input's id
  return (
    <label htmlFor={`title-input-${() => handleIndex(index)}`}>
      {label} * :
      <br />
      <input
        id={`title-input-${() => handleIndex(index)}`}
        type="text"
        placeholder="Entrez un titre pour la tâche"
        value={title}
        // Bind the input's value to the title state
        onChange={(event) => setTitle(event.target.value)}
        // Update the title state when the input value changes
        required
      />
    </label>
  );
};

/* Export the component as default */
export default TitleInput;
