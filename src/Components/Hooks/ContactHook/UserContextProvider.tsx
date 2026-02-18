import { useState } from "react";
import { UserContext } from "./UseContext";

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "jitu",
    role: "admin",
    theme: "dark",
  });
  return <UserContext value={{ user, setUser }}>{children} </UserContext>;
};
