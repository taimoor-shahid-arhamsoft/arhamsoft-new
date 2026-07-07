"use client";
import React, { createContext, useContext, useState } from "react";

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isTokenValid, setIsTokenValid] = useState(true);
  const [verifyReCaptcha, setVerifyReCaptcha] = useState(null);

  return (
    <TokenContext.Provider
      value={{
        token,
        setToken,
        isTokenValid,
        setIsTokenValid,
        verifyReCaptcha,
        setVerifyReCaptcha,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);
