"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext({
  token: "",
  setSessionToken: (sessionToken: string) => {},
});

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

export default function AppProvider({
  children,
  sessionToken,
}: {
  children: React.ReactNode;
  sessionToken?: string;
}) {
  const [token, setToken] = useState(sessionToken);

  return (
    <AppContext.Provider value={{ token, setSessionToken: setToken }}>
      {children}
    </AppContext.Provider>
  );
}
