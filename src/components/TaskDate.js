import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const TaskDate = ({ task }) => {
  const { dateFormat } = useContext(DataContext);

  return (
    <div>
      {/* Aucune date */}
      {!task.startDate && !task.endDate ? (
        <p>Aucune restriction de temps ?</p>
      ) : (
        ""
      )}
      {/* seulement la date de debut */}
      {task.startDate && !task.endDate ? (
        <p>Commence le {dateFormat(task.startDate)}.</p>
      ) : (
        ""
      )}

      {/* Seulement la date de fin */}
      {!task.startDate && task.endDate ? (
        <p>A terminer avant le {dateFormat(task.endDate)}.</p>
      ) : (
        ""
      )}

      {/* Date de debut et fin */}
      {task.startDate && task.endDate ? (
        <p>
          RDV du {dateFormat(task.startDate)} au {dateFormat(task.endDate)} !
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default TaskDate;
