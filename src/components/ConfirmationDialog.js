/* ./src/components/ConfirmationDialog.js
  This is the component to display a comfirmation dialog
*/

function ConfirmationDialog({ message, onConfirm, onCancel }) {
  return (
    <div className="confirmation-dialog">
      <p>{message}</p>
      <div>
        {/* The button to confirm the action, which executes the "onConfirm" function when the user clicks on it */}
        <button onClick={onConfirm} className="valid-button">
          Confirmer
        </button>
        {/* Le bouton pour annuler l'action, qui exécute la fonction "onCancel" lorsque l'utilisateur clique dessus */}
        <button onClick={onCancel} className="not-valid-button">
          Annuler
        </button>
      </div>
    </div>
  );
}

export default ConfirmationDialog;
