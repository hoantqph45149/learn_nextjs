import AppContext from "@/contexts/AppContext";
import { useContext } from "react";

function useAppContext() {
  return useContext(AppContext);
}

export default useAppContext;
