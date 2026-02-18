import { useContext } from "react";
import { UserContext } from "./UseContext";
export const Footer = () => {
  const { user, setUser } = useContext(UserContext);
  const toogleTheme = () => {
    setUser({
      ...user,
      theme: user.theme === "dark" ? "light" : "dark",
    });
  };
  return (
    <div>
      <h1>FOOTER</h1>
      <h2>welcome, {user.name}</h2>
      <h2>current theme : {user.theme}</h2>
      <button onClick={toogleTheme}>Toogle Themes</button>
    </div>
  );
};
