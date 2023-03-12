/* ./src/components/StartDateInput.js
this is the component to render the start date input
*/

import { useContext } from "react";
import DataContext from "../context/DataContext";

/* This component renders a label and an input field for the start date of a task */
const StartDateInput = ({ label, index }) => {
  /* CONTEXT IMPORTS */
  const { startDate, setStartDate, handleIndex } = useContext(DataContext);

  // Render a label element with a for attribute that corresponds to the input's id
  return (
    <label htmlFor={`start-date-input-${() => handleIndex(index)}`}>
      {label} :
      <br />
      <input
        id={`start-date-input-${() => handleIndex(index)}`}
        type="datetime-local"
        value={startDate ? startDate.toISOString().slice(0, -8) : ""}
        // Bind the input's value to the startDate state
        onChange={(event) => setStartDate(new Date(event.target.value))}
        // Update the startDate state when the input value changes
      />
    </label>
  );
};

/* Export the component as default */
export default StartDateInput;
