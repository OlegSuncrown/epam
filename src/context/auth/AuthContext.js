import React, { useState, createContext, useEffect } from "react";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";
export const AuthContext = createContext();

const AuthState = (props) => {
  const [user, setUser] = useState(null);
  //const [token, setToken] = useState(() => localStorage.getItem("AuthToken"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const URL = "https://hwtaweb20201216131958.azurewebsites.net";

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      setIsAuthenticated(true);
    }
    setUser(JSON.parse(localStorage.getItem("userData")));
  }, []);

  // Clear state if error happened or logout
  const logOut = () => {
    localStorage.removeItem("AuthToken");
    localStorage.removeItem("userData");
    setLoading(false);
    setUser(null);
    setIsAuthenticated(false);
  };

  // Load user
  const loadUser = async () => {
    if (localStorage.AuthToken) {
      setAuthToken(localStorage.AuthToken);
    }
    try {
      const { data } = await axios.get(`${URL}/GetUserProfileInfo`);
      localStorage.setItem("userData", JSON.stringify(data));
      setUser(data);
    } catch {
      logOut();
    }
  };

  //Register User
  const registerUser = async (formData) => {
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
      logOut();
      throw new Error(err.response.data.errorText);
    }
  };

  const loginUser = async (formData) => {
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
      logOut();
      throw new Error(err.response.data.errorText);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
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
