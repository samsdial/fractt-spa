import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignOutUser, userStateListener } from "../config/auth";

export const AuthContext = createContext({
  currentUser: {},
  // eslint-disable-next-line no-unused-vars
  setCurrentUser: (_user) => {},
  singOut: () => {},
});

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null, children);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = userStateListener((user) => {
      if (user) {
        setCurrentUser(user);
      }
    });
    return unsubscribe;
  }, [setCurrentUser]);

  const signOut = () => {
    SignOutUser();
    setCurrentUser(null);
    navigate("/");
  };

  const value = {
    currentUser,
    setCurrentUser,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
