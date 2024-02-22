"use client";

import Image, { StaticImageData } from "next/image";
import AddToCart from "./AddToCart";

type ProductBuyProps = {
  image: StaticImageData;
  title: string;
  description: string;
  price: number;
  buttonText: string;
  onButtonClick: () => void;
};

const ProductBuy = ({
  image,
  title,
  description,
  price,
  buttonText,
  onButtonClick,
}: ProductBuyProps) => {
  return (
    <section className="max-container flex-between mt-20 mb-40 max-lg:flex-col max-lg:gap-10">
      <div className="bg-[#f1f1f1] rounded-lg w-[540px] h-[560px] flex-center max-xl:w-[400px] max-lg:w-full max-sm:h-[400px]">
        <Image
          src={image}
          alt="XX99 Mark2 Headphones"
          width={350}
          height={386}
        />
      </div>

      <div className="max-lg:text-center">
        <span className="subheading">New Product</span>
        <h2 className="heading-2 max-xl:w-[400px] max-lg:w-full">{title}</h2>
        <p className="product-description max-lg:w-full">{description}</p>
        <span className="block text-[18px] font-bold tracking-[1.286px] uppercase mb-10 max-lg:text-2xl">
          $ {price}
        </span>
        <AddToCart onButtonClick={onButtonClick} buttonText={buttonText} />
      </div>
    </section>
  );
};

export default ProductBuy;
