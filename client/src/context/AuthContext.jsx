import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import axiosInstance from "../services/axios";
import { API_PATH } from "../services/api";



const AuthContext = createContext();


export const AuthProvider = ({ children }) => {


  const [user, setUser] = useState(null);

 
  const [loading, setLoading] = useState(true);




  const getProfile = async () => {
    try {

      const response = await axiosInstance.get(
        
        API_PATH.AUTH.GET_PROFILE
      );

      setUser(response.data.user);

    } catch (error) {

      console.log("Profile Error:", error);

      localStorage.removeItem("token");

      setUser(null);

    } finally {

      setLoading(false);

    }
  };



  const login = async (email, password) => {

    const response = await axiosInstance.get(
      API_PATH.AUTH.LOGIN,
      {
        params: {
          email,
          password,
        },
      }
    );

    
    localStorage.setItem(
      "token",
      response.data.token
    );

  
    setUser(response.data.user);

    return response.data;
  };



  const logout = () => {

    localStorage.removeItem("token");

    setUser(null);
  };




  useEffect(() => {

    const token = localStorage.getItem("token");

    if (token) {

      getProfile();

    } else {

      setLoading(false);

    }

  }, []);


  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        getProfile,

        isAuthenticated: Boolean(user),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};