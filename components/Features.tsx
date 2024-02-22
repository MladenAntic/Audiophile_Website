type BoxItemProps = {
  number: number;
  item: string;
};

type FeaturesProps = {
  descriptionTop: string;
  descriptionBottom: string;
  array: Array<BoxItemProps>;
};

const BoxItem = ({ number, item }: BoxItemProps) => (
  <div className="flex items-center gap-4">
    <small className="text-orange-dark font-bold leading-[25px]">
      {number}x
    </small>
    <small className="leading-[25px] text-[15px]">{item}</small>
  </div>
);

const Features = ({
  descriptionTop,
  descriptionBottom,
  array,
}: FeaturesProps) => {
  return (
    <section className="max-container flex items-start justify-between mb-40 max-lg:flex-col max-lg:gap-20">
      <div>
        <h2 className="mb-8 text-[32px] font-bold leading-[36px] tracking-[1.143px] uppercase">
          Features
        </h2>
        <p className="w-[635px] opacity-80 max-sm:w-full max-xl:w-[600px] max-xl:text-sm">
          {descriptionTop} <br />
          <br /> {descriptionBottom}
        </p>
      </div>

      <div>
        <h2 className="mb-8 text-[32px] font-bold leading-[36px] tracking-[1.143px] uppercase">
          In The Box
        </h2>
        <div className="flex flex-col">
          {array.map((boxItem) => (
            <BoxItem number={boxItem.number} item={boxItem.item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
