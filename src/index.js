import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import AuthState from "./context/auth/AuthContext";
import GoalState from "./context/goals/GoalContext";
import SeasonalGoalState from "./context/seasonalGoals/SeasonalGoalContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthState>
        <GoalState>
          <SeasonalGoalState>
            <App />
          </SeasonalGoalState>
        </GoalState>
      </AuthState>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
