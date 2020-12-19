import React, { useState, createContext, useEffect } from "react";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";
export const GoalContext = createContext();

const GoalState = (props) => {
  const [goals, setGoals] = useState("Goal");
  return (
    <GoalContext.Provider
      value={{
        goals,
      }}
    >
      {props.children}
    </GoalContext.Provider>
  );
};
export default GoalState;
