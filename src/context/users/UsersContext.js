import React, { useState, createContext, useEffect, useContext } from "react";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
export const UsersContext = createContext();

const UsersState = (props) => {
  const { isAuthenticated } = useContext(AuthContext);
  const URL = "https://hwtaweb20201216131958.azurewebsites.net";
  const [usersList, setUsersList] = useState([]);
  const [friendsList, setFriendsList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadUsers = async () => {
    if (localStorage.AuthToken) {
      setAuthToken(localStorage.AuthToken);
    }

    try {
      const { data } = await axios.get(`${URL}/getAllUsersProfiles`);

      setUsersList(data);
      setIsLoaded(true);
    } catch (e) {
      console.log(e);
    }
  };

  const loadFriends = async () => {
    if (localStorage.AuthToken) {
      setAuthToken(localStorage.AuthToken);
    }

    try {
      const { data } = await axios.get(`${URL}/getAllUserFriends`);

      setFriendsList(data);
      setIsLoaded(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (isAuthenticated || localStorage.AuthToken) {
      loadUsers();
      loadFriends();
    }
  }, [isAuthenticated]);

  return (
    <UsersContext.Provider
      value={{
        usersList,
        friendsList,
        loadFriends,
        setIsLoaded,
        isLoaded,
        loadFriends,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};
export default UsersState;
