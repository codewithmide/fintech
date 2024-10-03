"use client"

import { Button } from "./common/Button";
import StartCard from "./common/StartCard";

const StartSection = () => {
  return (
    <section className="center w-full bg-white md:p-20 p-8">
      <div className="between w-full flex-col lg:flex-row gap-10">
        <div className="flex lg:items-start items-center flex-col gap-6 w-full">
          <h1 className="sans xl:text-[32px] text-[26px] lg:text-left text-center font-bold w-full">
            Ready to get started ?
          </h1>
          <p className="text-grey font-medium inter xl:text-[15px] text-[12px] md:max-w-[400px] lg:text-left text-center">
            Lorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id
            viverra libero est nLorem ipsum dolor sit amet consectetur. Aliquet
            ut ante ut eu. Id viverra libero est n
          </p>
          <div className="flex gap-4">
            <Button
              link={() => {
                alert("Coming soon");
              }}
              cta="Join now"
              classname="text-white bg-black center text-center px-6 rounded-[15px] md:text-normal text-sm"
            />
            <Button
              link={() => {
                alert("Coming soon");
              }}
              cta="Learn more"
              classname="text-black border-black border center text-center px-6 rounded-[15px] md:text-normal text-sm"
            />
          </div>
        </div>
        <div className="center w-full gap-10 flex-col md:flex-row">
            <StartCard image="/svgs/cloud.svg" title="Store date on cloud" description="Lorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id viverra libero est nLorem ipsum dolor " />
            <StartCard image="/svgs/smart.svg" title="Connect dots smartly" description="Lorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id viverra libero est nLorem ipsum dolor " />
        </div>
      </div>
    </section>
  );
};

export default StartSection;
