import { createContext } from "react";
export const urlContext = createContext("https://svt-right-here.onrender.com");

export const UserContext = createContext({
    user: {},
    setUser: () => {}
  });

