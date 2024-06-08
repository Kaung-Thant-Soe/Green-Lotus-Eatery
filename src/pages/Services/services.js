import React, { useContext } from "react";
import services1 from "./assests/service-img-1.png";
import services2 from "./assests/service-img-2.png";
import order from "./assests/icons/Event Accepted.png";
import openTime from "./assests/icons/24-7 Open Sign.png";
import reserve from "./assests/icons/Reservation.png";
import booking from "./assests/icons/Booking.png";
import birthday from "./assests/icons/Birthday.png";
import chefs from "./assests/icons/Chef.png";
import darkorder from "./assests/icons/darkEventAccepted.png";
import darkopenTime from "./assests/icons/dark24-7 Open Sign.png";
import darkreserve from "./assests/icons/darkReservation.png";
import darkbooking from "./assests/icons/darkBooking.png";
import darkbirthday from "./assests/icons/darkBirthday.png";
import darkchefs from "./assests/icons/darkChef.png";
import { UserContext } from "../../App";

function ServiceComponent({ icon, service ,dark }) {
  return (
    <>
      <div className="">
        <div className="border-[1px] border-black flex items-center justify-around sm:gap-2 2xl:gap-4 min-[1920px]:gap-5 sm:px-3 md:px-2 px-3 min-[375px]:py-1  lg:py-3 min-[1920px]:px-5 min-[1920px]:py-4 rounded-xl">
          <div className="sm:w-[18px] w-auto h-full">
            <img src={icon} className="w-full h-full dark:hidden block" />
            <img src={dark} className="w-full h-full dark:block hidden" />
          </div>
          <div>
            <p className="sm:text-sm md:text-base py-1 lg:text-xl 2xl:text-2xl min-[1920px]:text-3xl">
              {service}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
// function DesktopService() {
//   const serviceArrayone = [
//     { icon: order, service: "Online Order" },
//     { icon: reserve, service: "Pre-Reservation" },
//     { icon: birthday, service: "Online Order" },
//   ];
//   const serviceArraytwo = [
//     { icon: openTime, service: "24/7 Service" },
//     { icon: booking, service: "Online Order" },
//     { icon: chefs, service: "Online Order" },
//   ];

//   return (
//     <>
//       <div className="max-w-dvw bg-lightWhite">
//         <div className="w-[90%] m-auto py-12 ">
//           <div className="flex flex-row gap-4 xl:gap-0">
//             <div className="space-y-6 sm:w-[40%] md:w-[55%] lg:w-[55%] xl:w-[50%] 2xl:w-[55%] min-[1920px]:w-[40%]">
//               <div className="flex justify-start w-full">
//                 <div className="sm:w-[80%]">
//                   <img src={services1} alt="image for services section" />
//                 </div>
//               </div>
//               <div className="flex justify-end w-full">
//                 <div className="sm:w-[80%]">
//                   <img src={services2} alt="image for services section" />
//                 </div>
//               </div>
//             </div>
//             <div className="sm:w-[60%] md:w-[65%] lg:w-[45%] xl:w-[50%] 2xl:w-[65%] min-[1920px]:w-[60%] my-auto mx-auto">
//               <div className="lg:w-full xl:w-[80%] min-[1920px]:w-[70%] xl:m-auto">
//                 <div className="text-center">
//                   <div>
//                     <h2 className="sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl min-[1920px]:text-6xl sm:py-3 md:py-6">
//                       We are more than multiple services
//                     </h2>
//                     <p className="sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl min-[1920px]:text-3xl sm:px-4 md:px-8 xl:px-6 2xl:px-12">
//                       Lorem ipsum dolor sit amet consectetur. Quisque pharetra
//                       amet donec libero enim.Quisque pharetra amet donec libero{" "}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex justify-between gap-5 sm:pt-5 md:pt-8 xl:pt-16">
//                   <div className="w-full">
//                     {serviceArrayone.map((item, index) => (
//                       <div className="sm:mb-3 md:mb-6 lg:mb-12">
//                         <ServiceComponent
//                           icon={item.icon}
//                           service={item.service}
//                         />
//                       </div>
//                     ))}
//                   </div>
//                   <div className="w-full">
//                     {serviceArraytwo.map((item, index) => (
//                       <div className="sm:mb-3 md:mb-6 lg:mb-12">
//                         <ServiceComponent
//                           icon={item.icon}
//                           service={item.service}
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// function MobileService() {
//   const serviceArrayone = [
//     { icon: order, service: "Online Order" },
//     { icon: reserve, service: "Pre-Reservation" },
//     { icon: birthday, service: "Online Order" },
//   ];
//   const serviceArraytwo = [
//     { icon: openTime, service: "24/7 Service" },
//     { icon: booking, service: "Online Order" },
//     { icon: chefs, service: "Online Order" },
//   ];
//   return (
//     <>
//       <div className="bg-lightWhite max-w-dvw ">
//         <div className="max-w-[90%] m-auto py-6">
//           <div className="text-center">
//             <div>
//               <h2 className="text-lg font-bold">
//                 We are more than multiple services
//               </h2>
//               <p className="py-4 font-normal text-base">
//                 Lorem ipsum dolor sit amet consectetur. Quisque pharetra amet
//                 donec libero enim.Quisque pharetra amet donec libero{" "}
//               </p>
//             </div>
//           </div>

//           <div className="w-full">
//             <div className="w-full space-y-3">
//               <div className="w-full flex justify-start">
//                 <div className="w-[65%]">
//                   <img src={services1} alt="serviceImg" />
//                 </div>
//               </div>
//               <div className="w-full flex justify-end">
//                 <div className="w-[65%]">
//                   <img src={services2} alt="serviceImg" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div>
//             <div>
//               <div></div>
//               <div></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
function Component() {
  const {theme,setTheme} = useContext(UserContext)
  const serviceArrayone = [
    { icon: order, service: "Online Order",darkIcon:darkorder },
    { icon: reserve, service: "Pre-Reservation",darkIcon:darkreserve },
    { icon: birthday, service: "Birthday Event",darkIcon:darkbirthday },
  ];
  const serviceArraytwo = [
    { icon: openTime, service: "24/7 Service",darkIcon:darkopenTime },
    { icon: booking, service: "Pre Booking",darkIcon:darkbooking },
    { icon: chefs, service: "Super Chefs",darkIcon:darkchefs },
  ];
  return (
    <>
      <div className={`bg-lightWhite ${theme === 'dark'?'dark':''} dark:bg-green dark:text-lightWhite/80 w-full`}>
        <div className="w-[90%] m-auto ">
          <div className="grid sm:grid-cols-[45%_minmax(50px,_1fr)] sm:grid-rows-2 min-[375px]:grid-cols-1 md:grid-cols-2 min-[375px]:pt-12 sm:pt-8 md:pt-12 min-[375px]:pb-8 ">
            {/* two image */}
            <div className="sm:row-span-3 sm:order-first space-y-5">
              <div className="w-full flex justify-start">
                <div className="w-[90%] min-[375px]:w-[70%] sm:w-[90%] lg:w-[80%] h-auto">
                  <img src={services1} className="w-full" />
                </div>
              </div>
              <div
                className="w-full flex justify-end
              "
              >
                <div className="w-[90%] min-[375px]:w-[70%] sm:w-[90%] lg:w-[80%] h-auto">
                  <img src={services2} className="w-full" />
                </div>
              </div>
            </div>
            {/* letter */}
            <div className="sm:w-[90%] min-[375px]:order-first mx-auto place-self-end min-[375px]:pb-6 md:pb-8">
              {" "}
              <div className=" text-center place-self-end h-full min-[375px]:w-[90%] sm:w-full md:w-[90%] 2xl:w-full m-auto">
                <h2 className="font-normal min-[375px]:text-2xl sm:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl min-[1920px]:text-6xl font-head min-[375px]:pb-4 sm:pb-4 md:pb-6 min-[1920px]:pb-12">
                  We are more than multiple services
                </h2>
                <p className="font-body min-[375px]:text-base sm:text-base min-[1440px]:text-xl 2xl:text-2xl min-[1920px]:text-3xl sm:px-4 lg:px-6 font-normal ">
                  Lorem ipsum dolor sit amet consectetur. Quisque pharetra amet
                  donec libero enim.Quisque pharetra amet donec libero{" "}
                </p>
              </div>
            </div>
            {/* service option */}
            <div className="w-full sm:w-[90%] min-[1440px]:w-full mx-auto h-full place-self-start min-[375px]:pt-6 sm:pt-4 md:pt-8">
              <div className="lg:w-[90%] m-auto">
                <div className="flex flex-row min-[375px]:justify-between min-[375px]:gap-2 sm:justify-between lg:justify-center lg:gap-4 min-[1440px]:gap-0 xl:justify-around xl:w-[90%] m-auto">
                  <div className="flex justify-between gap-5 ">
                    <div className="w-full cursor-default">
                      {serviceArrayone.map((item, index) => (
                        <div
                          key={index}
                          className="min-[375px]:mb-6 sm:mb-3 md:mb-6 lg:mb-8 min-[1440px]:mb-12 "
                        >
                          <ServiceComponent
                            icon={item.icon}
                            service={item.service}
                            dark={item.darkIcon}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between gap-5 ">
                    <div className="w-full">
                      {serviceArraytwo.map((item, index) => (
                        <div key={index} className="min-[375px]:mb-6 sm:mb-3 md:mb-6 lg:mb-8 min-[1440px]:mb-12">
                          <ServiceComponent
                            icon={item.icon}
                            dark={item.darkIcon}
                            service={item.service}
                          />
                        </div>
                      ))}
                    </div>
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
function Service() {
  return (
    <>
      {/* <div className="min-[375px]:hidden sm:block">
        <DesktopService />
      </div>
      <div className="min-[375px]:block sm:hidden">
        <MobileService />
      </div> */}
      <Component />
    </>
  );
}

export default Service;
