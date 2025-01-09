"use client";

import { User } from "@/app/app-provider";
import { createContext } from "react";

const AppContext = createContext<{
  user: User | null;
  setUser: (user: User | null) => void;
}>({
  user: null,
  setUser: () => {},
});

export default AppContext;
