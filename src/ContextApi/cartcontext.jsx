"use client";
import { createContext, useState } from "react";

export const CardContext = createContext(null);

export const CardContextProvider = ({ children }) => {
  const [cart, setCard] = useState([]);
  return <CardContext.Provider value={{cart,setCard}}>{children}</CardContext.Provider>;
};
