/* ./src/components/StartDateInput.js
this is the component to render the start date input
*/

import { useContext } from "react";
import DataContext from "../context/DataContext";

/* This component renders a label and an input field for the start date of a task */
const StartDateInput = ({ label, index }) => {
  /* CONTEXT IMPORTS */
  const { startDate, setStartDate, handleIndex, validDate } =
    useContext(DataContext);

  // Render a label element with a for attribute that corresponds to the input's id
  return (
    <div className="input-componants">
      <label htmlFor={`start-date-input-${() => handleIndex(index)}`}>
        {label} :
      </label>
      <input
        id={`start-date-input-${() => handleIndex(index)}`}
        type="datetime-local"
        value={validDate(startDate) ? startDate.toISOString().slice(0, -8) : ""}
        // Bind the input's value to the startDate state
        onChange={(event) => setStartDate(new Date(event.target.value))}
        // Update the startDate state when the input value changes
      />
    </div>
  );
};

/* Export the component as default */
export default StartDateInput;
