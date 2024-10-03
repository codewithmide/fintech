import FeaturesCard from "./common/FeaturesCard";

const Features = () => {
    return (
        <section className="bg-[#212121] flex items-center justify-center sm:flex-col md:flex-row w-full lg:pb-0 py-20 lg:gap-0 gap-8 lg:pt-0">
            <FeaturesCard title="Solve problem real time" image="/icons/solve.png" description="Lorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id viverra libero est nLorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id viverra libero est n" />
            <div className="w-[1px] bg-grey h-[119px] md:flex hidden"></div>
            <div className="h-[1px] bg-grey w-[70%] md:hidden"></div>
            <FeaturesCard title="Secured & safe Payments" image="/icons/safe.png" description="Lorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id viverra libero est nLorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id viverra libero est n" />
            <div className="w-[1px] bg-grey h-[119px] md:flex hidden"></div>
            <div className="h-[1px] bg-grey w-[70%] md:hidden"></div>
            <FeaturesCard title="24/7 Customer support" image="/icons/support.png" description="Lorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id viverra libero est nLorem ipsum dolor sit amet consectetur. Aliquet ut ante ut eu. Id viverra libero est n" />
        </section>
    );
}
 
export default Features;