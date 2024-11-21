// "use client";

// import { useState, useEffect, createContext, useContext } from "react";
// import Cookies from 'js-cookie';
// import axios from "axios";
// import { axiosInstance } from "@/lib/axios";
// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState({});
//   const [isLoading, setIsLoading] = useState(true);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [message, setMessage] = useState("");

//   const getProfile = async () => {
//     try {
//       setIsLoading(true);
//       console.log("AuthContext getProfile");
//       const response = await axiosInstance.get(
//         "user/getProfile",
//         {
//           headers: {
//             Authorization: `${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       setIsAuthenticated(true);

//       setUser(response.data);
//       setIsLoading(false);
//     } catch (err) {
//       console.log(err);
//       setIsAuthenticated(false);
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     console.log("AuthContext useEffect");

//     let token = localStorage.getItem("token");
//     if (!token) {
//       token = Cookies.get("token"); // Try to retrieve the token from cookies
//     }

//     if (!token) {
//       setIsAuthenticated(false);
//       setIsLoading(false);
//     } else {
//       console.log("AuthContext useEffect getProfile");
//       getProfile(token);
//     }
//     // if (localStorage.getItem("token") === null) {
//     //   setIsAuthenticated(false);
//     //   setIsLoading(false);
//     // } else {
//     //   console.log("AuthContext useEffect getProfile");
//     //   getProfile();
//     // }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         isLoading,
//         user,
//         isSuccess,
//         isError,
//         isAuthenticated,
//         message,
//         user,
//         setIsAuthenticated,
//         getProfile
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useUserContext = () => {
//   return useContext(AuthContext);
// };



"use client";

import { useState, useEffect, createContext, useContext } from "react";
import Cookies from 'js-cookie';
import { axiosInstance } from "@/lib/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const getProfile = async (token) => {
    try {
      setIsLoading(true);
      console.log("AuthContext getProfile");
      const response = await axiosInstance.get("user/getProfile", {
        headers: {
          Authorization: token,
        },
      });
      setIsAuthenticated(true);
      setUser(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsAuthenticated(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("AuthContext useEffect");

    // Check if the token exists in localStorage or cookies
    let token = localStorage.getItem("token");
    token = token || Cookies.get("token");
    if (token && !token.startsWith("Bearer")) {
      token = "Bearer " + token;
      localStorage.setItem("token", token);
    }    
    if (!token) {
      setIsAuthenticated(false);
      setIsLoading(false);
    } else {
      console.log("AuthContext useEffect getProfile");
      getProfile(token);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        user,
        isSuccess,
        isError,
        isAuthenticated,
        message,
        user,
        setIsAuthenticated,
        getProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(AuthContext);
};
