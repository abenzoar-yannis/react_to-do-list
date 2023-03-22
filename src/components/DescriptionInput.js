/* ./src/components/EndDateInput.js
this is the component to render the textarea input for the description
*/

import { useContext } from "react";
import DataContext from "../context/DataContext";

// This component renders a label and a textarea for the description of a task
const DescriptionInput = ({ label, index }) => {
  // Import the description state and its setState function from the DataContext using the useContext hook
  const { description, setDescription, handleIndex } = useContext(DataContext);

  // Render a label element with a for attribute that corresponds to the textarea's id
  return (
    <div className="input-componants">
      <label htmlFor={`description-input-${() => handleIndex(index)}`}>
        {label} :
      </label>
      <textarea
        id={`description-input-${() => handleIndex(index)}`}
        value={description}
        // Bind the textarea's value to the description state
        onChange={(event) => setDescription(event.target.value)}
        // Update the textarea's state when the input value changes
      />
    </div>
  );
};

/* Export the component as default */
export default DescriptionInput;
