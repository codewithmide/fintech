interface JoinCardType {
    title: string;
    description: string;
  }
  
  const JoinCard = ({
    title,
    description,
  }: JoinCardType) => {
    return (
      <div className="lg:w-[28%] md:w-[47.5%] w-full px-8 lg:py-12 py-0 flex flex-col items-start justify-start gap-6">
        <h3 className="font-bold lg:text-[43px] md:text-[32px] text-[26px] sans text-black">{title}</h3>
        <p className="font-medium text-grey lg:text-[20px] text-[14px] text-left">{description}</p>
      </div>
    );
  };
  
  export default JoinCard;
  