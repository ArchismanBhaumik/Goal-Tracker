import React from "react";

function GoalCard({ goal }) {
  return (
    <div className="card">
      <h3 className="goal-card-header card-header">{goal.name}</h3>
      <div className="card-body">
        <p>{goal.description}</p>

        <div className="goal-dates">
          <span>
            <strong>Start:</strong> {goal.startDate}
          </span>
          <span>
            <strong>End:</strong> {goal.endDate}
          </span>
        </div>

        <p className="goal-status">
          Status:{" "}
          <span>{goal.status}</span>
        </p>
      </div>
    </div>
  );
}

export default GoalCard;
