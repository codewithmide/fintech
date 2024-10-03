import JoinCard from "./common/JoinCard";

const JoinSection = () => {
  return (
    <section className="bg-green flex items-center justify-center flex-col w-full py-20 gap-8">
      <h1 className="sans xl:text-[32px] text-[30px] text-center font-bold md:w-full w-[90%]">
        Join millions getting secured payment
      </h1>
      <div className="center flex-col md:flex-row w-full lg:gap-0 gap-6">
        <JoinCard
          title="1.5M"
          description="Wich is appraximately 56% of the consumer population of the us"
        />
        <JoinCard
          title="41%"
          description="The lagest adopter due to being comfortable with technology"
        />
        <JoinCard
          title="3964+"
          description="The online payment system offer electronic alternatives yo traditional"
        />
      </div>
    </section>
  );
};

export default JoinSection;
