import Image, { StaticImageData } from "next/image";
import Button from "./Button";

type ProductItemProps = {
  image: StaticImageData;
  title: string;
  link: string;
  index: number;
};

type YouMayLikeProps = {
  array: Array<ProductItemProps>;
};

const ProductItem = ({ image, title, link, index }: ProductItemProps) => (
  <div className="w-[350px] h-[471px] flex flex-col flex-center gap-7 max-lg:w-[300px] max-md:w-full">
    <div className="w-full h-[318px] bg-[#f1f1f1] flex-center max-lg:h-[250px] max-md:w-full">
      <Image src={image} alt="Product Headphones" width={123} height={160} />
    </div>
    <h3 className="text-2xl font-bold tracking-[1.714px] uppercase">{title}</h3>
    <Button
      background="bg-orange-dark"
      hoverBg="hover:bg-orange-light"
      text="text-text-light"
      hoverText="hover:text-text-dark"
      border="border-none"
      link={link}
      index={index}
    />
  </div>
);

const YouMayLike = ({ array }: YouMayLikeProps) => {
  return (
    <section>
      <h2 className="text-[32px] font-bold leading-[36px] tracking-[1.143px] uppercase text-center mb-14 max-md:text-2xl max-sm:text-xl">
        You May Also Like
      </h2>
      <div className="max-container flex-center gap-8 max-lg:gap-4 max-md:flex-col max-md:space-y-5">
        {array.map((item) => (
          <ProductItem
            image={item.image}
            title={item.title}
            link={item.link}
            index={item.index}
          />
        ))}
      </div>
    </section>
  );
};

export default YouMayLike;
