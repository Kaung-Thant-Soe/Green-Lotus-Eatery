import React, { useContext, useState } from "react";
import Gps from "./assests/formIcon/location.png";
import Clock from "./assests/formIcon/clock.png";
import Mail from "./assests/formIcon/mail.png";
import phoneIcon from "./assests/formIcon/phone.png";
import { UserContext } from "../../App";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Reserve() {
  const { theme, setTheme } = useContext(UserContext);
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1a1nboo", "template_kay81fx", form.current, {
        publicKey: "67gLqRJVHYXJVq4Ul",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);

          setName("");
          setEmail("");
          setDate("");
          setTime("");
          setMessage("");
          setPhone("");
        },
        (error) => {
          console.log("FAILED...", error);
        },
      );
    // .then(
    //   () => {
    //     console.log("SUCCESS!");
    //     setName("");
    //     setEmail("");
    //     setDate("");
    //     setTime("");
    //     setMessage("");
    //     setPhone("");
    //   },
    //   (error) => {
    //     console.log("FAILED...", error.text);
    //   },
    // );
  };

  return (
    <>
      <div
        className={`w-full t-12 dark:bg-black/100 ${theme === "dark" ? "dark" : ""}`}
      >
        <div className="background border-2 dark:border-lightWhite/30 ">
          <div className="min-[375px]:max-w-[90%] lg:max-w-[80%]  m-auto min-[375px]:py-12 xl:py-20">
            <div className=" flex min-[375px]:flex-col lg:flex-row">
              <div className="min-[375px]:w-full md:w-[90%] lg:w-[60%] bg-green/50 rounded-r-3xl min-[375px]:rounded-l-3xl lg:rounded-r-none sm:rounded-s-3xl m-auto min-[375px]:py-12 xl:py-20 min-[375px]:mb-12 lg:mb-0">
                <form
                  className="min-[375px]:w-[90%] md:w-[80%]   m-auto "
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <h2 className="min-[375px]:text-3xl text-4xl 2xl:text-5xl text-center text-lightWhite font-normal font-head">
                    Online reservation
                  </h2>
                  <div className="flex items-center justify-between min-[375px]:gap-4 xl:gap-8 pt-8 pb-6 font-body">
                    <div className="flex flex-col w-full">
                      <label className="text-lightWhite text-lg 2xl:text-xl mb-2">
                        Name
                      </label>
                      <input
                        className="bg-transparent placeholder:text-lightWhite/30 w-full min-[375px]:placeholder:text-xs sm:placeholder:text-base lg:placeholder:text-base 2xl:placeholder:text-lg text-lightWhite"
                        placeholder="Enter Your Name"
                        type="text"
                        name="customer_name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="text-lightWhite text-lg 2xl:text-xl mb-2">
                        Email
                      </label>
                      <input
                        className="bg-transparent placeholder:text-lightWhite/30 w-full min-[375px]:placeholder:text-xs sm:placeholder:text-base lg:placeholder:text-base 2xl:placeholder:text-lg text-lightWhite"
                        placeholder="Enter Your Email"
                        type="email"
                        name="customer_email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-between min-[375px]:gap-4 xl:gap-8 pb-6 font-body">
                    <div className="flex flex-col w-full">
                      <label className="text-lightWhite text-lg 2xl:text-xl mb-2">
                        Date
                      </label>
                      <input
                        className="bg-transparent placeholder:text-lightWhite/30 w-full min-[375px]:placeholder:text-xs sm:placeholder:text-base lg:placeholder:text-base 2xl:placeholder:text-lg text-lightWhite min-[375px]:pe-[50%] sm:pe-[70%]"
                        placeholder="Enter Date"
                        type="date"
                        name="date"
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                      />
                    </div>
                    <div className="flex gap-4 w-full">
                      <div className="flex flex-col w-full">
                        <label className="text-lightWhite text-lg 2xl:text-xl mb-2">
                          Time
                        </label>
                        <input
                          className="bg-transparent placeholder:text-lightWhite/30 w-full min-[375px]:placeholder:text-xs sm:placeholder:text-base lg:placeholder:text-base 2xl:placeholder:text-lg text-lightWhite"
                          placeholder="Enter The Time"
                          type="tiem"
                          name="for_time"
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col w-full">
                        <label className="text-lightWhite text-lg 2xl:text-xl mb-2">
                          Phone
                        </label>
                        <input
                          className="bg-transparent placeholder:text-lightWhite/30 w-full min-[375px]:placeholder:text-xs sm:placeholder:text-sm lg:placeholder:text-basetext-lightWhite"
                          placeholder="Enter Phone Number"
                          type="tel"
                          name="customer_phone"
                          onChange={(e) => setPhone(e.target.value)}
                          value={phone}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col pb-6 font-body">
                    <label className="text-lightWhite text-lg 2xl:text-xl mb-2">
                      Message
                    </label>
                    <textarea
                      className="bg-transparent placeholder:text-lightWhite/30 min-[375px]:placeholder:text-sm  sm:placeholder:text-lg lg:placeholder:text-base 2xl:placeholder:text-lg text-lightWhite"
                      placeholder="Enter Text Here"
                      name="message"
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                    ></textarea>
                  </div>
                  <div className="bg-green text-center">
                    <input
                      className="bg-green border-none text-lightWhite text-lg text-center w-full"
                      value="Book Now"
                      type="submit"
                    />
                  </div>
                </form>
              </div>
              <div className="min-[375px]:w-full lg:w-[40%] bg-green min-[375px]:rounded-3xl lg:rounded-l-none">
                <div className="m-auto h-full min-[375px]:py-8 sm:py-12 lg:py-6">
                  <div className="max-w-[80%] lg:max-w-[90%] m-auto text-center text-lightWhite flex flex-col items-center justify-center gap-2 h-full">
                    <div>
                      <h2 className="capitalize font-head min-[375px]:text-xl sm:text-3xl lg:text-2xl xl:text-3xl ">
                        contact with us
                      </h2>
                      <p className="font-body px-10 lg:px-2 xl:px-5 py-4 lg:py-2 xl:py-4 2xl:py-8 min-[375px]:text-base sm:text-lg lg:text-base xl:text-lg 2xl:text-xl sm:pe-12 2xl:pe-6 min-[1920px]:pe-5">
                        Lorem ipsum dolor sit amet consectetur. Vulputate non
                        dictum{" "}
                      </p>
                    </div>
                    <div>
                      <h2 className="min-[375px]:text-lg sm:text-2xl lg:text-xl xl:text-xl 2xl:text-2xl capitalize font-semibold">
                        location
                      </h2>
                      <div className="flex justify-between min-[375px]:gap-2 sm:gap-4 items-center py-4 2xl:py-6 lg:py-2">
                        <div className="sm:w-[45px] xl:w-[40px] text-start">
                          <img src={Gps} className="w-full" />
                        </div>
                        <p className="font-body ps-3 min-[375px]:text-base sm:text-lg lg:text-base xl:text-lg 2xl:text-xl text-start sm:pe-12 lg:pe-0 2xl:pe-6 min-[1920px]:pe-3">
                          Lorem ipsum dolor sit amet consectetur. Vulputate non
                          dictum{" "}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h2 className="min-[375px]:text-lg sm:text-2xl lg:text-xl 2xl:text-2xl capitalize font-semibold">
                        Opening Time
                      </h2>
                      <div className="flex justify-between min-[375px]:gap-2 sm:gap-4 items-center py-4 2xl:py-6 lg:py-2">
                        <div className="sm:w-[45px] xl:w-[40px] text-start">
                          <img src={Clock} className="w-full" />
                        </div>
                        <p className="font-body ps-3 text-start min-[375px]:text-base sm:text-lg lg:text-base xl:text-lg 2xl:text-xl sm:pe-12 lg:pe-0 2xl:pe-6 min-[1920px]:pe-3">
                          Lorem ipsum dolor sit amet consectetur. Vulputate non
                          dictum{" "}
                        </p>
                      </div>
                    </div>
                    <div className="w-full">
                      <h2 className="min-[375px]:text-lg sm:text-2xl lg:text-xl 2xl:text-2xl capitalize font-semibold ">
                        Email
                      </h2>
                      <div
                        className="flex justify-between sm:justify-start min-[375px]:gap-0 sm:gap-4 lg:gap-4 items-center py-4 lg:py-2 2xl:py-4 w-full cursor-pointer"
                        onClick={() =>
                          (window.location =
                            "mailto:GreenLotusEastery@gmail.com")
                        }
                      >
                        <div className="sm:w-[30px] md:w-[37px] lg:w-[23px] min-[1440px]:w-[27px] 2xl:w-[24px] min-[1920px]:w-[32px] text-start">
                          <img src={Mail} className="w-full" />
                        </div>
                        <p className="font-body min-[375px]:text-base sm:text-lg lg:text-base xl:text-lg 2xl:text-xl text-start ps-3  2xl:pe-6 min-[1920px]:pe-3 cursor-pointer">
                          GreenLotusEastery@gmail.com{" "}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center gap-8 w-full sm:mt-6 cursor-pointer" onClick={() => (
                            (window.location = "tel:+959 446 126 471")
                          )}>
                      <div className=" bg-lightWhite min-[375px]:w-12 xl:w-16 min-[375px]:h-12 xl:h-16 rounded-full text-center">
                        <div className=" min-[375px]:p-4 xl:p-5">
                          <img src={phoneIcon} className="w-full h-auto" />
                        </div>
                      </div>
                      <div>
                        <p
                          className="font-body min-[375px]:text-lg sm:text-xl xl:text-xl 2xl:text-2xl text-yellowOrange cursor-pointer"
                          
                        >
                          +959 446 126 471
                        </p>
                        <p className="font-body min-[375px]:text-lg sm:text-xl xl:text-xl 2xl:text-2xl capitalize">
                          call us anytime
                        </p>
                      </div>
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

export default Reserve;
