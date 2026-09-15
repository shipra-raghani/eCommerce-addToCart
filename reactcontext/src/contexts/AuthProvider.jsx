import { createContext, useContext, useEffect, useState } from "react";
import instance from "../axios";

const authContext = createContext({});

function AuthProvider({ children }) {
  const [loggedInUser, setLoggedinUser] = useState(null);

  useEffect(() => {
    fetchUserStatus();
  }, []);

  async function fetchUserStatus() {
    try{
    const response = await instance.get("/user/me", { withCredentials: true });
    console.log(response);
    }
    catch(error){
        
    }
  }

  return (
    <authContext.Provider value={{ loggedInUser }}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}

export default AuthProvider;
