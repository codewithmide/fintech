import { MdLocationOn } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";

const FooterSection = () => {
  return (
    <section className="bg-[#F3F3F3] center flex-col text-black md:px-20 pt-10 between w-full pb-6">
      <div className="flex items-center justify-center md:justify-between md:flex-row flex-col w-full pb-6 lg:gap-0 gap-10">
        <h1 className="sans xl:text-[31px] text-[26px] font-bold items-start text-left w-[304px]">
          Make secure payment & grow your online business
        </h1>
        <div className="flex inter text-[#7E7E7E] gap-12 flex-col">
          <div className="flex flex-col md:items-start items-center gap-2">
            <ul className="flex flex-col items-center gap-6">
              <li className="center gap-3">
                <MdLocationOn color="black" width={24} height={24} />
                <span className="text-normal sm:text-sm max-w-[210px]">8502 presston Rd.inglewood maine 98380 usa</span>
              </li>
              <li className="flex items-start w-full md:items-center gap-3">
                <IoMdMail />
                <span className="text-normal sm:text-sm">Support@fintech.co</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-grey mt-10 mb-3"></div>
      <div className="flex md:items-start w-full md:gap-10 gap-3 text-sm md:text-normal items-center lg:justify-start justify-center">
        <Link href="/">Demos</Link>
        <Link href="/">About</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Pages</Link>
        <Link href="/">Contact</Link>
      </div>
    </section>
  );
};

export default FooterSection;
