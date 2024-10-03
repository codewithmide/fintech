interface StartCardType {
    image: string;
    title: string;
    description: string;
  }
  
  const StartCard = ({
    image,
    title,
    description,
  }: StartCardType) => {
    return (
      <div className="lg:w-[42%] md:w-[45%] w-full rounded-lg p-6 flex flex-col items-start justify-start gap-4 border border-[#CFCFCF]">
        <div className="w-[62px] h-[62px]">
          <img src={image} alt="image" />
        </div>
        <h3 className="font-bold text-[19px] sans text-black">{title}</h3>
        <p className="font-medium text-grey text-[14px] text-left">{description}</p>
      </div>
    );
  };
  
  export default StartCard;
  