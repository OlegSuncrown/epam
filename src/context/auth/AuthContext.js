import React, { useState, createContext, useEffect } from "react";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";
export const AuthContext = createContext();

const AuthState = (props) => {
  const URL = "https://hwtaweb20201216131958.azurewebsites.net";
  const imageURL =
    "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png";

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userImage, setUserImage] = useState(imageURL);
  const [isLoading, setLoading] = useState(true);

  // Load user data after page reload
  useEffect(() => {
    if (localStorage.getItem("userData")) {
      setIsAuthenticated(true);
    }

    setUser(JSON.parse(localStorage.getItem("userData")));
    setUserImage(JSON.parse(localStorage.getItem("userImage")));
  }, []);

  // Clear state if error happened or logout
  const logOut = () => {
    localStorage.removeItem("AuthToken");
    localStorage.removeItem("userData");
    localStorage.removeItem("userImage");
    setUserImage("");
    setLoading(false);
    setUser(null);
    setIsAuthenticated(false);
  };

  const loadImage = async () => {
    try {
      const { data } = await axios.get(`${URL}/GetProfilePicture`);
      setUserImage(data);
      localStorage.setItem("userImage", JSON.stringify(data));
    } catch {
      setUserImage(imageURL);
    }
  };

  //Load user
  const loadUser = async () => {
    if (localStorage.AuthToken) {
      setAuthToken(localStorage.AuthToken);
    }
    try {
      const { data } = await axios.get(`${URL}/GetUserProfileInfo`);
      setUser(data);
      localStorage.setItem("userData", JSON.stringify(data));
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
      loadImage();
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
      loadImage();
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
        userImage,
        loadImage,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
