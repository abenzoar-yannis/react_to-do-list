import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const TaskDate = (task, index) => {
  const { dateFormat } = useContext(DataContext);

  return (
    <div>
      {/* Aucune date */}
      {!task.task.startDate && !task.task.endDate ? (
        <p>Aucune restriction de temps ?</p>
      ) : (
        ""
      )}
      {/* seulement la date de debut */}
      {task.task.startDate && !task.task.endDate ? (
        <p>Commence le {dateFormat(task.task.startDate)}.</p>
      ) : (
        ""
      )}

      {/* Seulement la date de fin */}
      {!task.task.startDate && task.task.endDate ? (
        <p>A terminer avant le {dateFormat(task.task.endDate)}.</p>
      ) : (
        ""
      )}

      {/* Date de debut et fin */}
      {task.task.startDate && task.task.endDate ? (
        <p>
          RDV du {dateFormat(task.task.startDate)} au{" "}
          {dateFormat(task.task.endDate)} !
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default TaskDate;
