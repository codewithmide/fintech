interface FeaturesCardType {
    image: string;
    title: string;
    description: string;
  }
  
  const FeaturesCard = ({
    image,
    title,
    description,
  }: FeaturesCardType) => {
    return (
      <div className="lg:w-[32%] md:w-[47.5%] w-full px-8 lg:py-12 py-0 flex flex-col items-start justify-start gap-6">
        <div className="w-[62px] h-[62px]">
          <img src={image} alt="image" />
        </div>
        <h3 className="font-bold text-[19px] sans text-white">{title}</h3>
        <p className="font-medium text-grey text-[14px] text-left">{description}</p>
      </div>
    );
  };
  
  export default FeaturesCard;
  