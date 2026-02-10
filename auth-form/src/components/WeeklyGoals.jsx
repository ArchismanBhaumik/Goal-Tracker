import React from 'react'
import { useContext } from 'react';
import GoalCard from "./GoalCard";
import { GoalContext } from "../context/Context";
function WeeklyGoals() {
  const { goalsArr } = useContext(GoalContext);
  return (
   <div className="all-goals-container my-3">
      <div className="goals-grid m-5 mx-5">
        {goalsArr.length > 0 ? (
          goalsArr.filter((goal)=>goal.status == 'In Progress').map((goal, index) => (
            <GoalCard key={index} goal={goal} />
          ))
        ) : (
          <p>No goals yet. Start adding something!</p>
        )}
      </div>
    </div>
  )
}

export default WeeklyGoals