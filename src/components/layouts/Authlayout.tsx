import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Pos from "../slides/Pos";
import Performance from "../slides/Performance";
// import required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const Authlayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-white relative h-screen">
      <div className="flex items-center justify-between p-2 md:px-4 md:py-3 lg:py-4 lg:px-8 h-full">
        {/* slide imgs */}
        <div className="hidden lg:flex lg:w-[50%] h-full">
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <Pos />
            </SwiperSlide>
            <SwiperSlide>
              <Performance />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* forms */}
        <div className="flex items-center justify-center w-full h-full lg:w-[50%] border border-[#009FE3] rounded-2xl lg:border-0">
          <div className="flex flex-col gap-4 lg:gap-6 items-center lg:items-start w-full md:max-w-[449px] px-2n">
            {children}
            <div className="flex items-center justify-center w-full">
              <p className="font-satoshi text-secondary text-center text-xs md:text-sm lg:text-base">
                © <span className="text-[#002561]">2025</span> Keystone Bank
                Ltd. Licensed by the CBN.
                <br />
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full hidden lg:block">
        <img
          src={"/wave.png"}
          alt="Wave"
          width={500}
          height={100}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Authlayout;
