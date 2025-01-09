"use client";
import AppContext from "@/contexts/AppContext";
import { AccountResType } from "@/schemaValidations/account.schema";
import { useState } from "react";

export type User = AccountResType["data"];

export default function AppProvider({
  children,
  user: initialUser,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  const [user, setUser] = useState<User | null>(initialUser);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}
