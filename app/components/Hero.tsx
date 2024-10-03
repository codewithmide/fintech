"use client";

import Navbar from "./Navbar";
import { Button } from "./common/Button";

const HeroSection = () => {
  return (
    <section className="text-black flex items-center flex-col w-full lg:pb-0 pb-20 lg:gap-0 gap-16">
      <Navbar />
      <div className="between md:flex-row sm:flex-col w-[90%] h-full">
        <div className="flex flex-col md:gap-10 md:items-start items-center gap-6">
          <h1 className="sans md:text-left sm:text-center xl:text-xxxl lg:text-xxl md:text-xl text-[30px] leading-tight lg:leading-[70px] max-w-[750px] font-bold">
            The next gen payment method.
          </h1>
          <p className="md:max-w-[400px] inter w-full lg:text-[16px] text-[14px] font-medium text-lightGrey md:text-left sm:text-center">
            Lorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id
            viverra libero est n
          </p>
          <div className="">
            <Button
              link={() => {
                alert("Coming soon");
              }}
              cta="Get your card"
              classname="text-white bg-black center text-center px-6 rounded-[15px] md:text-[24px]"
            />
          </div>
          <div className="flex items-center justify-start md:flex-row flex-col md:gap-6 gap-3">
            <div className="center gap-3">
              <h4 className="font-bold md:text-[43px] text-[27px]">2943</h4>
              <p className="text-grey font-medium md:text-[18px] text-sm sans w-[91px] leading-none">
                Cards delivered
              </p>
            </div>
            <div className="w-[1px] bg-grey h-[49px] md:flex hidden"></div>
            <div className="h-[1px] bg-grey w-[34px] md:hidden"></div>
            <div className="center gap-3">
              <h4 className="font-bold md:text-[43px] text-[27px]">$1M+</h4>
              <p className="text-grey font-medium md:text-[18px] text-sm sans w-[91px] leading-none">
                Transaction completed
              </p>
            </div>
          </div>
        </div>
        <div className="md:pt-0 pt-10 center">
          <img src="/images/man.svg" alt="phone" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
