import React from "react";
function GoalCard({ goal }) {
  return (
    <div className="card">
      <h3 className="goal-card-header card-header">{goal.name}</h3>
      <div className="card-body">
        <p>{goal.description}</p>

        <div className="goal-dates">
          <span className="me-1">
            <strong>Start:</strong> {goal.startDate}
          </span>
          <span>
            <strong>End:</strong> {goal.endDate}
          </span>
        </div>

        <p className="goal-status">
          Status:{" "}
          <span
            className={`px-2 pb-1 rounded-pill 
            ${goal.status === "New" ? "bg-primary" : ""}
            ${goal.status === "In Progress" ? "bg-warning" : ""}
            ${goal.status === "Completed" ? "bg-success" : ""}
            `}
          >
            {goal.status}
          </span>
        </p>
      </div>
    </div>
  );
}

export default GoalCard;
