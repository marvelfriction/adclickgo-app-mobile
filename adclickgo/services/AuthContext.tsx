import React, { createContext, useState, useEffect } from "react";
import { storeToken, removeToken, getToken  } from "./serviceUtils";
// import axiosInstance from "./axiosInstance";
import { userDetails } from "./endpoints";

interface AuthContextProps {
  isAuthenticated: boolean;
  // login: (userData: { token: string; user: any }) => void;
  // logout: () => void;
  user: any;
  // isAppLoading: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  // login: () => {},
  // logout: () => {},
  user: null,
  // isAppLoading: false,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  // const [isAppLoading, setIsAppLoading] = useState(true);


  useEffect(() => {
    let isMounted = true; // Prevent updates if the component unmounts
    const checkAuth = async () => {
      try {
        const token = await getToken();
        if (token) {
          // Validate token with backend
          const response = await userDetails();
          console.log("User Details:", response);
          if (isMounted && response.success === true) {
            setIsAuthenticated(true)
            setUser(response.data)
          }
        } else {
          if (isMounted) {
            setIsAuthenticated(false);
            setUser(null);
          }
        }
      } catch (error) {
        console.log("Auth check fail:", error);
        removeToken(); // Token is invalid/expired, or API call failed
        if (isMounted) {
          setIsAuthenticated(false);
          setUser(null);
        }
      }
    };

    checkAuth();

    return () => {
      isMounted = false; // Prevent state updates if component unmounts
    };
  }, []);

  // const login = async (token: string) => {
  //   storeToken(token);
  //   // setUser(userData.user);
  //   setIsAuthenticated(true);
  // };

  // const logout = async () => {
  //   removeToken();
  //   // setUser(null); //clears user state
  //   setIsAuthenticated(false);
  // };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
};
