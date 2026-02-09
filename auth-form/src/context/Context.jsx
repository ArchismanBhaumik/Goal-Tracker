import { createContext, useState } from "react";

export const GoalContext = createContext();

export const GoalProvider = ({ children }) => {
  const [goalsArr, setGoalsArr] = useState([]);

  return (
    <GoalContext.Provider value={{ goalsArr, setGoalsArr }}>
      {children}
    </GoalContext.Provider>
  );
};
