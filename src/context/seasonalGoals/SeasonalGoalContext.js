import React, { useState, createContext, useEffect, useContext } from "react";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import swal from "sweetalert2";
export const SeasonalGoalContext = createContext();

const SeasonalGoalState = (props) => {
  const location = useLocation();
  const { logOut, isAuthenticated } = useContext(AuthContext);
  const URL = "https://hwtaweb20201216131958.azurewebsites.net";

  const [goalsList, setGoalsList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [goalsError, setGoalsError] = useState("");
  const [sortedGoals, setSortedGoals] = useState([]);
  // Count difference between 2 dates
  const date_diff_indays = (date1, date2) => {
    let dt1 = new Date(date1);
    let dt2 = new Date(date2);
    return Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24)
    );
  };

  // Mark goal as completed
  const completeGoal = async (id) => {
    const data = {
      goalId: id,
      isCompleted: true,
    };

    try {
      await axios.post(`${URL}/completeUserGoal`, data);
      // swal.fire("Success", "Goal was completed!", "success");
      // loadGoals();
      setIsLoaded(true);
    } catch (err) {
      setIsLoaded(true);
    }
  };

  ///getAllUserGoals
  const loadGoals = async () => {
    if (localStorage.AuthToken) {
      setAuthToken(localStorage.AuthToken);
    }
    try {
      const { data } = await axios.get(`${URL}/getAllGlobalGoals`);

      const formatData = data.map((item) => {
        const allDays = date_diff_indays(item.startDate, item.plannedEndDate);
        let currentDay =
          date_diff_indays(Date.now(), item.plannedEndDate) > allDays
            ? 0
            : allDays - date_diff_indays(Date.now(), item.plannedEndDate);
        let progress = Math.round((currentDay * 100) / allDays);
        let fullyCompleted = false;
        // Check if goal need to be completed
        if (!item.isCompleted && currentDay >= allDays) {
          completeGoal(item.goalId);
        }

        if (currentDay > allDays) {
          currentDay = allDays;
        }

        if (progress > 100) {
          progress = 100;
        }

        if (
          item.finishedDate &&
          date_diff_indays(item.finishedDate, item.plannedEndDate) <= 0
        ) {
          fullyCompleted = true;
        }

        return {
          ...item,
          allDays,
          currentDay: currentDay > 0 ? currentDay : 0,
          progress,
          fullyCompleted,
        };
      });

      setGoalsError("");
      setIsLoaded(true);
      setSortedGoals(formatData);
      setGoalsList(formatData);
    } catch (err) {
      if (err.response.status === 401) {
        location.search = "";
        setGoalsError("");
        logOut();
      }
      setGoalsError("Error, could not fetch list of goals");
      setIsLoaded(true);
    }
  };

  const deleteGoals = async (goalId) => {
    setIsLoaded(false);
    try {
      await axios.delete(`${URL}/DeleteUserGoal`, {
        data: { goalId: goalId },
      });

      loadGoals();
      setIsLoaded(true);
    } catch (err) {
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    if (isAuthenticated || localStorage.AuthToken) {
      loadGoals();
    }
  }, [isAuthenticated]);

  // Filter user goals
  const filterGoals = (filter = "all") => {
    let goals = [...goalsList];

    if (filter === "all") {
      goals = goals;
    }

    if (filter === "byCompleted") {
      goals = goals.filter((item) => item.isCompleted);
    }

    if (filter === "byFullyCompleted") {
      goals = goals.filter((item) => item.fullyCompleted);
    }

    if (filter === "byActive") {
      goals = goals.filter((item) => !item.isCompleted);
    }

    setSortedGoals(goals);
  };

  return (
    <SeasonalGoalContext.Provider
      value={{
        goalsList,
        isLoaded,
        goalsError,
        loadGoals,
        deleteGoals,
        completeGoal,
        filterGoals,
        sortedGoals,
      }}
    >
      {props.children}
    </SeasonalGoalContext.Provider>
  );
};
export default SeasonalGoalState;
