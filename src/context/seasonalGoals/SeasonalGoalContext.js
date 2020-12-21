import React, { useState, createContext, useEffect, useContext } from "react";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

export const SeasonalGoalContext = createContext();

const SeasonalGoalState = (props) => {
  const location = useLocation();
  const { logOut, isAuthenticated } = useContext(AuthContext);
  const URL = "https://hwtaweb20201216131958.azurewebsites.net";

  const [goalsList, setGoalsList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [goalsError, setGoalsError] = useState("");

  const date_diff_indays = (date1, date2) => {
    let dt1 = new Date(date1);
    let dt2 = new Date(date2);
    return Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24)
    );
  };

  ///getAllUserGoals
  const loadGoals = async () => {
    if (localStorage.AuthToken) {
      setAuthToken(localStorage.AuthToken);
    }
    try {
      //change req URL
      const { data } = await axios.get(`${URL}/getAllUserGoals`);
      const formatDate = data.map((item) => {
        const allDays = date_diff_indays(item.startDate, item.plannedEndDate);
        const currentDay =
          date_diff_indays(Date.now(), item.plannedEndDate) > allDays
            ? 0
            : allDays - date_diff_indays(Date.now(), item.plannedEndDate);
        const progress = Math.round((currentDay * 100) / allDays);
        return {
          ...item,
          allDays,
          currentDay: currentDay > 0 ? currentDay : 0,
          progress: progress,
        };
      });

      setGoalsError("");
      setIsLoaded(true);
      console.log(formatDate);
      setGoalsList(formatDate);
    } catch (err) {
      if (err.response?.status === 401) {
        location.search = "";
        setGoalsError("");
        logOut();
      }
      setGoalsList([]);
      setGoalsError("Error, can not fetch list of goals");
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    if (isAuthenticated || localStorage.AuthToken) {
      loadGoals();
    }
  }, [isAuthenticated]);

  return (
    <SeasonalGoalContext.Provider
      value={{
        goalsList,
        isLoaded,
        goalsError,
        loadGoals,
      }}
    >
      {props.children}
    </SeasonalGoalContext.Provider>
  );
};
export default SeasonalGoalState;
