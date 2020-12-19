import React, { useState, createContext, useEffect } from "react";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";
export const AuthContext = createContext();

const AuthState = (props) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const URL = "https://hwtaweb20201216131958.azurewebsites.net";
  const imageURL =
    "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png";

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

  // const loadUserPicture = async () => {
  //   if (localStorage.AuthToken) {
  //     setAuthToken(localStorage.AuthToken)
  //   }
  //   try {
  //     const {data} = await axios.get('https://hwtaweb20201216131958.azurewebsites.net/GetProfilePicture')
  //     setUser({...user, image: data || "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"})
  //   } catch (err) {
  //     console.log(err.response.data.errorText)
  //   }
  //   console.log('submited')
  // }

  // Load user
  const loadUser = async () => {
    if (localStorage.AuthToken) {
      setAuthToken(localStorage.AuthToken);
    }
    try {
      const { data } = await axios.get(`${URL}/GetUserProfileInfo`);
      const addImageField = { ...data, image: imageURL };
      setUser(addImageField);
      localStorage.setItem("userData", JSON.stringify(addImageField));
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
      localStorage.setItem("AuthToken", res.data.access_token);
      setIsAuthenticated(true);
      setLoading(false);
      loadUser();
    } catch (err) {
      logOut();
      throw new Error(err.response.data.errorText);
    }
  };

  // Login
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
