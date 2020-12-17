import React, { useState, createContext } from "react";
import setAuthToken from "./setAuthToken";
import axios from "axios";
export const AuthContext = createContext();

const AuthState = (props) => {
  const [user, setUser] = useState({ hi: "user" });
  const [token, setToken] = useState(() => localStorage.getItem("AuthToken"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const URL = "https://hwtaweb20201216131958.azurewebsites.net";
  console.log("token", token);

  //https://hwtaweb20201216131958.azurewebsites.net/GetUserProfileInfo

  // Load user
  const loadUser = async () => {
    if (localStorage.AuthToken) {
      setAuthToken(localStorage.AuthToken);
    }
    try {
      const { data } = await axios.get(`${URL}/GetUserProfileInfo`);
      setUser(data);
      console.log(data);
    } catch (err) {
      console.log(err);
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
      console.log(res.data.access_token);
      //loadUser()
    } catch (err) {
      console.log(err);
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
      //console.log(res.data.access_token)
      loadUser();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        registerUser,
        loginUser,
        isAuthenticated,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
