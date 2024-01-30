import { createContext } from "react";
export const urlContext = createContext("http://localhost:8080/api");

export const UserContext = createContext({
    user: {},
    setUser: () => {}
  });

