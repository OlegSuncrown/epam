import React, { useState, createContext, useEffect } from "react";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";
export const AuthContext = createContext();

const AuthState = (props) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("AuthToken"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const URL = "https://hwtaweb20201216131958.azurewebsites.net";

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      setIsAuthenticated(true);
    }
    setUser(JSON.parse(localStorage.getItem("userData")));
  }, []);

  // Clear state if error happened or logout
  const logOut = (error = null) => {
    localStorage.removeItem("AuthToken");
    localStorage.removeItem("userData");
    setToken(null);
    setLoading(false);
    setUser(null);
    setIsAuthenticated(false);
    setError(error);
  };

  // Load user
  const loadUser = async () => {
    setError(null);
    if (localStorage.AuthToken) {
      setAuthToken(localStorage.AuthToken);
    }
    try {
      const { data } = await axios.get(`${URL}/GetUserProfileInfo`);
      localStorage.setItem("userData", JSON.stringify(data));
      setUser(data);
    } catch (err) {
      logOut("Unauthorized");
    }
  };

  //Register User
  const registerUser = async (formData) => {
    setError(null);
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    try {
      const res = await axios.post(`${URL}/registration`, formData, config);
      localStorage.setItem("AuthToken", res.token);
      setIsAuthenticated(true);
      setLoading(false);

      loadUser();
    } catch (err) {
      logOut(err.response.data.errorText);
    }
  };

  const loginUser = async (formData) => {
    setError(null);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(`${URL}/auth`, formData, config);
      localStorage.setItem("AuthToken", res.data.access_token);
      setIsAuthenticated(true);
      loadUser();
    } catch (err) {
      logOut(err.response.data.errorText);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        registerUser,
        loginUser,
        isAuthenticated,
        logOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
