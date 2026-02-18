import { createContext } from "react";
export const UserContext = createContext({
  user: {
    name: "jitendra",
    role: "Admin",
    theme: "dark",
  },
  setUser: () => {},
});
