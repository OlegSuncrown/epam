import React, { useState, createContext, useEffect, useContext } from "react";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

export const GoalContext = createContext();

const GoalState = (props) => {
  const location = useLocation();
  const { logOut, isAuthenticated } = useContext(AuthContext);
  const URL = "https://hwtaweb20201216131958.azurewebsites.net";

  const [goalsList, setGoalsList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [goalsError, setGoalsError] = useState("");
  ///getAllUserGoals

  const loadGoals = async () => {
    if (localStorage.AuthToken) {
      setAuthToken(localStorage.AuthToken);
    }
    try {
      const { data } = await axios.get(`${URL}/getAllUserGoals`);
      setGoalsList(data);
      setIsLoaded(true);
    } catch (err) {
      if (err.response.status === 401) {
        location.search = "";
        logOut();
      }
      setGoalsList([]);
      setGoalsError("Error, can not fetch posts");
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadGoals();
    }
  }, [isAuthenticated]);

  return (
    <GoalContext.Provider
      value={{
        goalsList,
        isLoaded,
        goalsError,
        loadGoals,
      }}
    >
      {props.children}
    </GoalContext.Provider>
  );
};
export default GoalState;
