/* ./src/components/EndDateInput.js
this is the component to render the end date input
*/

import { useContext } from "react";
import DataContext from "../context/DataContext"; // Import the DataContext

/* This component renders a label and an input field for the end date of a task */
const EndDateInput = ({ label, index }) => {
  /* CONTEXT IMPORTS */
  const { endDate, setEndDate, handleIndex, validDate } =
    useContext(DataContext);

  // Render a label element with a for attribute that corresponds to the input's id
  return (
    <div className="input-componants">
      <label htmlFor={`end-date-input-${() => handleIndex(index)}`}>
        {label} :
      </label>
      <input
        id={`end-date-input-${() => handleIndex(index)}`}
        type="datetime-local"
        value={validDate(endDate) ? endDate.toISOString().slice(0, -8) : ""}
        // Bind the input's value to the endDate state, and format the date to ISO format
        onChange={(event) => setEndDate(new Date(event.target.value))}
        // Update the endDate state when the input value changes
      />
    </div>
  );
};

/* Export the component as default */
export default EndDateInput;
