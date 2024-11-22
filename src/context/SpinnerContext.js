// context/SpinnerContext.js
import React, { createContext, useContext, useState } from "react";

const SpinnerContext = createContext();

export const SpinnerProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <SpinnerContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </SpinnerContext.Provider>
  );
};

export const useSpinner = () => useContext(SpinnerContext);
