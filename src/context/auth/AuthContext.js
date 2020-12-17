import React, { useState, createContext } from "react";

export const AuthContext = createContext();

const AuthState = (props) => {
  const [user, setUser] = useState({ hi: "user" });

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
