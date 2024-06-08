import React, { useContext } from "react";
import logo from "../Navigation/assests/logo.png";
import facebook from "./assests/facebook.png";
import instagram from "./assests/instagram.png";
import linkedIn from "./assests/linkedIn.png";
import darkFacebook from "./assests/dark-facebook.png";
import darkInstagram from "./assests/dark-instagram.png";
import darkLinkedIn from "./assests/dark-linkedIn.png";
import { UserContext } from "../App";
function Footer() {
  const { theme, setTheme } = useContext(UserContext);
  return (
    <>
      <div
        className={`w-full bg-white ${theme === "dark" ? "dark" : ""} dark:bg-blackMode`}
      >
        <div className="min-[375px]:max-w-[90%] lg:max-w-[80%] m-auto min-[375px]:pt-10   md:pt-20 pb-12 dark:text-textDark/80">
          <div className="flex min-[375px]:flex-col sm:flex-row gap-8 sm:gap-4 md:gap-0 lg:gap-8 justify-between w-full">
            <div className="w-full">
              <div className="flex items-center gap-4 cursor-default">
                <img src={logo} />
                <p className="font-head min-[375px]:text-2xl sm:text-xl md:text-2xl 2xl:text-4xl font-bold">
                  Green Lotus Eatery
                </p>
              </div>
              <div>
                <p className="min-[375px]:text-base sm:text-base md:text-lg 2xl:text-2xl font-medium  font-body capitalize mt-6">
                  It is a long established fact that a reader will be .
                </p>
              </div>
            </div>
            <div className="flex justify-between w-full min-[375px]:gap-6 sm:gap-5 md:gap-7 lg:gap-10 xl:gap-24">
              <div className="">
                <h2 className="min-[375px]:text-xl md:text-2xl 2xl:text-4xl font-head font-semibold min-[375px]:mb-3 md:mb-6">
                  About
                </h2>
                <div className="font-body min-[375px]:text-base md:text-lg 2xl:text-2xl min-[375px]:space-y-3 md:space-y-6">
                  <h3 className="whitespace-nowrap cursor-pointer">Our Menu</h3>
                  <h3 className="whitespace-nowrap cursor-pointer">
                    Contact Us
                  </h3>
                  <h3 className="whitespace-nowrap cursor-pointer">Services</h3>
                </div>
              </div>
              <div className=" md:w-[70%] ">
                <h2 className="font-head min-[375px]:text-xl md:text-2xl 2xl:text-4xl font-semibold min-[375px]:mb-3 md:mb-6">
                  Contact
                </h2>
                <div className="font-body min-[375px]:text-base md:text-lg 2xl:text-2xl min-[375px]:space-y-3 md:space-y-6">
                  <p className="cursor-auto">
                    55 East Birchwood Ave. Brooklyn, New York 11201
                  </p>
                  <p
                    className="cursor-pointer select-none"
                    onClick={() =>
                      (window.location = "mailto:GreenLotusEastery@gmail.com")
                    }
                  >
                    contact@Green Lotus Eastery.com
                  </p>
                  <p
                    className="cursor-pointer select-none"
                    onClick={() => (window.location = "tel:+959 446 126 471")}
                  >
                    +959 446 126 471
                  </p>
                  <div className="flex gap-5">
                    <div>
                      <a href="https://www.facebook.com" className="cursor-pointer">
                        <img
                          src={facebook}
                          alt="icon"
                          className="dark:hidden block"
                        />
                        <img
                          src={darkFacebook}
                          alt="icon"
                          className="dark:block hidden"
                        />
                      </a>
                    </div>
                    <div>
                      <a href="https://www.instagram.com" className="cursor-pointer"><img
                        src={instagram}
                        alt="icon"
                        className="dark:hidden block"
                      />
                      <img
                        src={darkInstagram}
                        alt="icon"
                        className="dark:block hidden"
                      /></a>
                    </div>
                    <div>
                     <a href="https://www.linkedin.com/" className="cursor-pointer">
                     <img
                        src={linkedIn}
                        alt="icon"
                        className="dark:hidden block"
                      />
                      <img
                        src={darkLinkedIn}
                        alt="icon"
                        className="dark:block hidden"
                      />
                     </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="min-[375px]:my-6 md:my-12 bg-green h-1">
            <hr />
          </div>
          <div className="w-full text-center">
            <p className="min-[375px]:text-lg md:text-2xl xl:text-3xl 2xl:text-4xl font-body font-medium">
              Copyright © Green Lotus Eastery | Designed by Webloom
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
