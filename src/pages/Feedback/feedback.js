import React, { useContext } from "react";
import clientOne from "./assests/clientOne.png";
import clientTwo from "./assests/clientTwo.png";
import clientThree from "./assests/clientThree.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Customer from "./components/components";
import { UserContext } from "../../App";
const customerInfo = [
  {
    img: clientOne,
    feedback:
      "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
    name: "mg mg",
    place: "Sydney, USA",
  },
  {
    img: clientTwo,
    feedback:
      "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
    name: "ko kaung  ",
    place: "Sydney, USA",
  },
  {
    img: clientThree,
    feedback:
      "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
    name: "ko wai",
    place: "Sydney, USA",
  },
  {
    img: clientOne,
    feedback:
      "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
    name: "mg mg",
    place: "Sydney, USA",
  },
  {
    img: clientTwo,
    feedback:
      "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
    name: "mg mg",
    place: "Sydney, USA",
  },
  {
    img: clientThree,
    feedback:
      "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
    name: "mg mg",
    place: "Sydney, USA",
  },
];

// function Customer({
//   customerImg,
//   customerFeedback,
//   customerName,
//   customerAddress,
// }) {
//   return (
//     <>
//       <div className="w-full pt-20  xl:pt-24 xl:pb-0">
//         <div className="w-full m-auto relative h-full z-0 px-1 xl:px-3">
//           <div className="w-full  absolute min-[375px]:-top-16 sm:-top-14 xl:-top-16">
//             <div className="min-[375px]:w-[35%] sm:w-[30%] lg:w-[40%] xl:w-[35%] min-[1920px]:w-[28%] m-auto">
//               <img
//                 src={customerImg}
//                 alt="customer image"
//                 className="w-full h-full"
//               />
//             </div>
//           </div>
//           <div className="border-[1px] border-black rounded-3xl px-2 w-full text-center min-[375px]:pt-16 sm:pt-12   lg:pt-20 xl:pt-24 2xl:pt-28 lg:pb-8 pb-4 " >
//             <div>
//               <div>
//                 <p className="quote lg:text-lg xl:text-xl 2xl:text-2xl leading-7 lg:px-2">{customerFeedback}</p>
//               </div>
//             </div>
//             <hr className="w-[90%] m-auto my-4"/>
//             <div>
//               <div>
//                 <p className="font-head text-2xl 2xl:text-3xl capitalize">{customerName}</p>
//                 <p className="text-xl 2xl:text-2xl xl:mt-2">{customerAddress}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
function FeedBack() {
  const {theme,setTheme} = useContext(UserContext)
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div
        className={`py-10 ${theme === 'dark'?'dark':''} dark:bg-[#020602]`}
      >
        <div className="max-w-[90%] m-auto dark:text-lightWhite">
          <div className="min-[375px]:pb-6 lg:pb-8">
            <h2 className="min-[375px]:text-xl sm:text-4xl lg:text-5xl 2xl:text-7xl text-center font-semibold  capitalize font-head sm:font-normal tracking-wide">
              What the People Thinks About Us
            </h2>
          </div>
          <div>
            <div className="w-full slider-container">
              <Slider {...settings}>
                {customerInfo.map((item, index) => (
                  <React.Fragment key={index}>
                    <Customer
                      customerImg={item.img}
                      customerFeedback={item.feedback}
                      customerAddress={item.place}
                      customerName={item.name}
                    />
                  </React.Fragment>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FeedBack;
