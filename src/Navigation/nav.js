import React, { useContext, useState } from "react";
import logo from "../Navigation/assests/logo.png";
import menu from "../Navigation/assests/mobileMenu.png";
import cross from "../Navigation/assests/icons8-cross-100.png";
import darkCross from "../Navigation/assests/dark-icons8-cross-100.png";
import darkMenu from "./assests/darkMobileMenu.png";
import { UserContext } from "../App";
import { AnimatePresence, animate, motion } from "framer-motion";
function Nav() {
  const { theme, setTheme } = useContext(UserContext);
  const navList = [
    { code: "home", value: "Home" },
    { code: "about", value: "About" },
    { code: "services", value: "Services" },
    { code: "menu", value: "Menu" },
    { code: "contact", value: "Contact" },
  ];
  const [isShow, setIsShow] = useState(false);
  const handleDarkMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else setTheme("light");
  };

  function DesktopNav() {
    return (
      <>
        <div className={`${theme === "dark" ? "dark" : "light"}`}>
          <ul className="flex flex-row items-center justify-center gap-8 lg:gap-6 dark:text-lightWhite">
            {navList.map((item, index) => (
              <li
                key={index}
                className="font-body lg:text-lg xl:text-xl 2xl:text-2xl font-semibold hover:text-yellowOrange dark:text-lightWhite text-black cursor-pointer"
              >
                {item.value}
              </li>
            ))}
            <li className="font-body lg:text-xl 2xl:text-2xl whitespace-nowrap font-semibold cursor-default">
              Dark Mode
            </li>
            <div className="border-2 border-green border-solid ps-1 pe-2 py-1 relative rounded-3xl bg-lightWhite dark:bg-green">
              <button
                className="flex items-center flex-row dark:flex-row-reverse dark:gap-4  gap-2"
                onClick={handleDarkMode}
              >
                <div className="  lg:w-8 lg:h-8 bg-green rounded-[50%]  dark:bg-lightWhite"></div>
                <p className="lg:text-xl font-semibold dark:text-lightWhite">
                  {theme === "dark" ? "ON" : "OFF"}
                </p>
              </button>
            </div>
          </ul>
        </div>
      </>
    );
  }
  function MobileNav() {
    return (
      <>
        <AnimatePresence>
          <motion.div
            variants={{
              initial: { scaleY: 0 },
              animate: {
                scaleY: 1,
                transition: {
                  duration: 0.5,
                  ease: [0.12, 0, 0.39, 0],
                },
              },
              // exit: {
              //   rotate: 30,
              //   transition: {
              //     duration: 5,
              //     ease: [0.12, 0, 0.39, 1],
              //   },
              // },
            }}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative w-full dark:text-lightWhite"
          >
            <div
              className={`w-full h-full ${isShow ? "hidden" : "block"}`}
              onClick={() => setIsShow(true)}
            >
              <img
                src={menu}
                alt="square menu"
                className="w-full h-full dark:hidden block"
              />
              <img
                src={darkMenu}
                alt="square menu"
                className="w-full h-full dark:block hidden"
              />
            </div>
            <div>
              <div
                className={`${isShow ? "block w-[40px] h-[40px] absolute z-10 -top-6 -right-2 " : "hidden"}`}
                onClick={() => setIsShow(false)}
              >
                <img
                  src={cross}
                  alt="cross img"
                  className="w-full h-full dark:hidden block"
                />
                <img
                  src={darkCross}
                  alt="cross img"
                  className="w-full h-full dark:block hidden "
                />
              </div>
              <div
                className={`absolute rounded-ss-[3.5rem] rounded-ee-[3.5rem] -top-10 -right-6 border-[1px] border-black ps-4 origin-top pe-6 py-8 bg-lightWhite dark:bg-gradient-to-b  from-green to-green/70 w-fit ${isShow ? "block " : "hidden"}`}
              >
                <ul className="flex flex-col items-start gap-8 ">
                  {navList.map((item, index) => (
                    <li
                      key={index}
                      className="font-body text-xl font-semibold hover:text-yellowOrange text-black dark:text-lightWhite"
                    >
                      {item.value}
                    </li>
                  ))}
                  <div className="flex flex-row items-center justify-center w-full gap-6">
                    <li className="font-body text-xl font-semibold whitespace-nowrap w-fit">
                      Dark Mode
                    </li>
                    <div className="border-2 border-green border-solid ps-1 pe-2 py-1 rounded-3xl  bg-lightWhite dark:bg-blackLight">
                      <button
                        className="flex flex-row dark:flex-row-reverse items-center gap-2"
                        onClick={handleDarkMode}
                      >
                        <div className="w-8 h-8 bg-green dark:bg-lightWhite rounded-[50%]"></div>
                        <p className="text-xl font-semibold dark:text-lightWhite">
                          {theme === "dark" ? "ON" : "OFF"}
                        </p>
                      </button>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </>
    );
  }
  return (
    <>
      <div
        className={`${
          theme === "dark" ? "dark" : "light"
        } max-w-dvw m-auto min-[375px]:bg-lightWhite sm:bg-white  dark:bg-blackMode dark:text-lightWhite `}
      >
        <div className="flex flex-row min-[375px]:w-[80%] lg:w-[90%]  max-w-[1536px] m-auto h-full items-center justify-between py-8 gap-0 ">
          <div className="flex flex-row items-center min-[375px]:gap-4 ">
            <div className="min-[375px]:w-[40px] min-[375px]:h[40px] sm:w-[50px] sm:h-[50px] ">
              <img src={logo} alt="logo" />
            </div>
            <div className="cursor-default">
              <p className="font-head font-bold xl:text-2xl 2xl:text-4xl min-[375px]:text-xl whitespace-nowrap">
                Green Lotus Eatery
              </p>
            </div>
          </div>
          <div>
            <div className="min-[375px]:hidden dark:text-lightWhite lg:block w-full h-full">
              <DesktopNav />
            </div>
            <div className="lg:hidden min-[375px]:block w-fit h-full">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Nav;
