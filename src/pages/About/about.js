import React, { useContext } from "react";
import aboutImg from "./assests/about-img.png";
import aboutImgMobile from "./assests/about-image-mobile.png";
import { UserContext } from "../../App";
import Slider from "react-slick";
import renderingOne from "./assests/rendering-1.png";
import renderingTwo from "./assests/rendering-2.png";
import renderingOneMobile from "./assests/rendering-1-mobile.png";
import renderingTwoMobile from "./assests/rendering-2-mobile.png";
import { useEffect } from "react";
function About() {
  const { theme, setTheme } = useContext(UserContext);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 10000,
    cssEase: "linear",
  };
  return (
    <>
      <div
        className={`w-full ${theme === "dark" ? "dark" : ""} dark:bg-blackMode`}
      >
        <div className="w-[90%] m-auto">
          <div className="flex min-[375px]:flex-col sm:flex-row min-[375px]:py-4 sm:py-8 lg:py-16 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-16 dark:text-lightWhite/80">
            <div className="sm:w-[55%]  sm:pt-4 md:pt-0">
              <div className="w-full h-full slider-container sm:block min-[375px]:hidden">
                <Slider {...settings}>
                  <div className="min-[375px]:hidden sm:block  w-full h-full px-3">
                    {" "}
                    <img
                      src={aboutImg}
                      alt="about Image"
                      className="min-[375px]:hidden sm:block  w-full h-full "
                    />
                  </div>
                  <div className="min-[375px]:hidden sm:block  w-full h-full px-3">
                    {" "}
                    <img
                      src={renderingOne}
                      alt="about Image"
                      className="min-[375px]:hidden sm:block  w-full h-full "
                    />
                  </div>
                  <div className="min-[375px]:hidden sm:block  w-full h-full px-3">
                    {" "}
                    <img
                      src={renderingTwo}
                      alt="about Image"
                      className="min-[375px]:hidden sm:block   w-full h-full "
                    />
                  </div>
                </Slider>
              </div>
              <div className="min-[375px]:block sm:hidden slider-container w-full h-full">
                <Slider {...settings}>
                  <div className=" w-full h-full ps-3">
                    <img
                      src={aboutImgMobile}
                      alt="about Image Mobile"
                      className="w-full h-full"
                    />
                  </div>
                  <div className=" w-full h-full ps-3">
                    <img
                      src={renderingOneMobile}
                      alt="about Image Mobile"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-full h-full ps-3">
                    <img
                      src={renderingTwoMobile}
                      alt="about Image Mobile"
                      className="w-full h-full"
                    />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="sm:w-[45%] min-[1440px]:w-1/2 min-[375px]:py-6 sm:py-0 my-auto">
              <div className="w-full">
                <div className="min-[375px]:pb-4 sm:pb-2 lg:pb-4 2xl:pb-8 min-[1920px]:pb-16">
                  <div className="w-full text-center">
                    <h2 className="min-[375px]:text-4xl sm:text-2xl lg:text-3xl xl:text-4xl min-[1440px]:text-4xl 2xl:text-6xl min-[1920px]:text-7xl font-head min-[375px]:text-start sm:text-center">
                      About us
                    </h2>
                  </div>
                  <div className="">
                    <h2 className="min-[375px]:text-2xl sm:text-lg md:base lg:text-xl xl:text-2xl 2xl:text-4xl min-[1920px]:text-5xl font-head min-[375px]:py-3 lg:py-6 min-[1920px]:py-16">
                      About the building
                    </h2>
                    <p className="min-[375px]:text-base sm:text-xs md:text-xs lg:text-lg min-[1440px]:text-xl 2xl:text-2xl min-[1920px]:text-3xl font-body">
                      Lorem ipsum dolor sit amet consectetur. Elementum aliquam
                      pellentesque odio aliquet tellus id interdum sollicitudin
                      in. Morbi proin rhoncus ipsum eu auctor risus tincidunt
                      odio euismod. Id placerat ultricies eleifend scelerisque
                      sed viverra. Nunc nunc at pretium donec.Lorem ipsum dolor
                      sit amet
                    </p>
                  </div>
                </div>
                <hr />

                <div className="min-[375px]:pt-4 sm:pt-2 lg:pt-4 min-[1440px]:pt-8 min-[1920px]:pt-16 min-[1440px]:pb-4">
                  <div>
                    <h2 className="font-head min-[375px]:text-2xl sm:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl min-[1920px]:text-5xl min-[375px]:pb-4 sm:pb-2 md:pb-4 lg:pb-6">
                      Founder&Chefs
                    </h2>
                    <p className="min-[375px]:text-base sm:text-xs md:text-sm lg:text-lg min-[1440px]:text-xl 2xl:text-2xl min-[1920px]:text-3xl font-body">
                      Lorem ipsum dolor sit amet consectetur. Elementum aliquam
                      pellentesque odio aliquet tellus id interdum sollicitudin
                      in. Morbi proin rhoncus ipsum eu auctor risus tincidunt
                      odio euismod. Id placerat ultricies eleifend scelerisque
                      sed viverra. Nunc nunc at pretium donec.Lorem ipsum dolor
                      sit amet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
