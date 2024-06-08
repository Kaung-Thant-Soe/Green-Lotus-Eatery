import React, { useContext } from "react";
import Main from "./mainDish";
import PopularDish from "./popularDish";
import { UserContext } from "../../App";
function Menu() {
  const { theme, setTheme } = useContext(UserContext);
  // alert(window.screen.width)
  return (
    <>
      <div className={`${theme === "dark" ? "dark" : ""} dark:bg-green `}>
        <Main />
        <PopularDish />
      </div>
    </>
  );
}
export default Menu;
