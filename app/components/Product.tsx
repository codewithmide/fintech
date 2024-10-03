"use client";

import { Button } from "./common/Button";

const ProductSection = () => {
  return (
    <section className="flex items-center md:gap-24 lg:gap-40 gap-12 flex-col w-full bg-white py-20 lg:py-28">
      <div className="md:w-[85%] center md:flex-row flex-col gap-6 md:gap-0">
        <div className="md:w-[55%] w-full">
          <img src="/images/card.svg" alt="account" />
        </div>
        <div className="lg:w-[45%] md:w-[55%] w-[90%] flex flex-col items-start xl:gap-8 gap-6 md:pl-6">
          <div className="flex flex-col md:tems-start items-center">
            <h1 className="sans xl:text-[32px] lg:text-[26px] text-[18px] text-left font-bold w-full">
              A fully integrated suit
            </h1>
            <h1 className="sans xl:text-[32px] lg:text-[26px] text-[18px] text-left font-bold w-full">
              of payments products
            </h1>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-black font-semibold inter xl:text-[17px] text-[14px] md:max-w-[400px] text-left">
              Instant payment.electronic payments are much faster than the
              traditional methods of payments.
            </p>
            <p className="text-grey font-medium inter xl:text-[15px] text-[12px] md:max-w-[400px] text-left">
              Lorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id
              viverra libero est nLorem ipsum dolor sit amet consectetur.
              Aliquet ut ante ut eu. Id viverra libero est n
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-[85%] center md:flex-row flex-col-reverse gap-6 md:gap-0">
        <div className="lg:w-[40%] md:w-[55%] w-[90%] flex flex-col items-start gap-8">
          <div className="flex flex-col md:items-start items-center">
            <h1 className="inter xl:text-[32px] lg:text-[26px] text-[20px] text-left font-bold">
              The backbone for
            </h1>
            <h1 className="inter xl:text-[32px] lg:text-[26px] text-[20px] text-left font-bold">
              internet business
            </h1>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-grey font-medium inter xl:text-[15px] text-[12px] md:max-w-[400px] text-left">
              Lorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id
              viverra libero est nLorem ipsum dolor sit amet consectetur.
              Aliquet ut ante ut eu. Id viverra libero est n
            </p>
            <p className="italic md:max-w-[400px] text-[14px] text-[#7E7E7E]">
              “simply the best.better than all the rest.recommend this product
              to beginner and advanced user”
            </p>
            <div className="flex items-start gap-2">
                <div>
                    <img src="/svgs/user.svg" alt="user" />
                </div>
                <div className="flex flex-col text-sm">
                    <p className="text-black font-medium">Theresa Webb</p>
                    <p className="text-grey">Director of technology .creativegig</p>
                </div>
            </div>
          </div>
        </div>

        <div className="md:w-[55%] w-full flex md:items-end md:justify-end">
          <img src="/images/card2.svg" alt="account" />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
