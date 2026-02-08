import React from "react";
import GoalCard from "./GoalCard";

function AllGoals() {
  // Sample goals — replace with actual stored goals later
  const goals = [
    {
      name: "Learn React",
      description: "Complete React basics and projects",
      status: "In Progress",
      startDate: "2026-02-01",
      endDate: "2026-03-01",
    },
    {
      name: "Gym Routine",
      description: "Workout 5 days a week",
      status: "New",
      startDate: "2026-02-10",
      endDate: "2026-04-10",
    },
     {
      name: "Gym Routine",
      description: "Workout 5 days a week",
      status: "New",
      startDate: "2026-02-10",
      endDate: "2026-04-10",
    },
     {
      name: "Gym Routine",
      description: "Workout 5 days a week",
      status: "New",
      startDate: "2026-02-10",
      endDate: "2026-04-10",
    },
     {
      name: "Gym Routine",
      description: "Workout 5 days a week",
      status: "New",
      startDate: "2026-02-10",
      endDate: "2026-04-10",
    },
    {
      name: "Gym Routine",
      description: "Workout 5 days a week",
      status: "New",
      startDate: "2026-02-10",
      endDate: "2026-04-10",
    },
    {
      name: "Gym Routine",
      description: "Workout 5 days a week",
      status: "New",
      startDate: "2026-02-10",
      endDate: "2026-04-10",
    },
    {
      name: "Gym Routine",
      description: "Workout 5 days a week",
      status: "New",
      startDate: "2026-02-10",
      endDate: "2026-04-10",
    },
  ];

  return (
    <div className="all-goals-container my-3">
      <h2 className="my-3">Your Goals</h2>

      <div className="goals-grid mb-5">
        {goals.map((goal, index) => (
          <GoalCard key={index} goal={goal} />
        ))}
      </div>
    </div>
  );
}

export default AllGoals;
