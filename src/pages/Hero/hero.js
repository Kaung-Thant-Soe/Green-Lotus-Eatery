import React, { useContext } from "react";
import Nav from "../../Navigation/nav";
import hero from "../Hero/assests/hero.png";
import mobileHero from "./assests/mobile-hero.png";
import { UserContext } from "../../App";
function Hero() {
  const { theme, setTheme } = useContext(UserContext);
  return (
    <>
      <div
        className={`bg-lightWhite ${theme === "dark" ? "dark" : ""} dark:bg-green w-full`}
      >
        <div className="w-[90%] m-auto">
          <div className="flex min-[375px]:flex-col-reverse sm:flex-row items-center dark:text-lightWhite/80">
            <div className="min-[375px]:w-full sm:w-[55%] text-center">
              <div className="lg:mb-12 sm:mb-6 min-[375px]:pt-6 text-start">
                <h2 className="min-[375px]:text-2xl sm:text-xl md:text-2xl lg:text-4xl min-[1440px]:text-5xl min-[1920px]:text-6xl font-head min-[375px]:text-center sm:text-start">
                  Healthy Eating Make Easy
                </h2>
              </div>
              <div>
                <p className="font-body min-[375px]:text-base sm:text-xs md:text-sm lg:text-lg 2xl:text-2xl min-[1920px]:text-3xl sm:pe-5 md:pe-8 lg:pe-12 xl:pe-28 min-[375px]:text-center min-[375px]:py-6 sm:text-start 2xl:leading-9 min-[1920px]:leading-10">
                  Lorem ipsum dolor sit amet consectetur. Ac sit elit venenatis
                  faucibus libero condimentum id elit. Facilisi pulvinar turpis
                  sollicitudin et. Aliquam nunc ut pulvinar aliquet volutpat
                  adipiscing laoreet aliquet pulvinar turpis sollicitudin et.
                  Aliquam nunc ut pulvinar aliquet volutpat adipiscing laoreet
                  aliquet.
                </p>
              </div>
            </div>
            <div className="sm:w-[45%]">
              <div className="min-[375px]:hidden sm:block">
                <img src={hero} alt="hero image" className="w-full" />
              </div>
              <div className="min-[375px]:block sm:hidden">
                <img src={mobileHero} alt="hero image" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
