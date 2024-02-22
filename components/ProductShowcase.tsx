"use client"

import Image, { StaticImageData } from "next/image";
import Button from "./Button";

type ProductProps = {
  image: StaticImageData;
  title: string;
  description: string;
  reverse: boolean;
  link: string;
  index: number;
};

const Product = ({
  image,
  title,
  description,
  reverse,
  link,
  index
}: ProductProps) => {
  return reverse === false ? (
    <section className="max-container flex-between mt-48 max-lg:flex-col max-lg:gap-10">
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
    </section>
  ) : (
    <section className="max-container flex-between mt-48 max-lg:flex-col-reverse max-lg:gap-10">
      <div className="max-lg:text-center">
        <span className="subheading">New Product</span>
        <h2 className="heading-2 max-xl:w-[400px] max-lg:w-full">{title}</h2>
        <p className="product-description max-lg:w-full">{description}</p>
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

      <div className="bg-[#f1f1f1] rounded-lg w-[540px] h-[560px] flex-center max-xl:w-[400px] max-lg:w-full max-sm:h-[400px]">
        <Image
          src={image}
          alt="XX99 Mark2 Headphones"
          width={350}
          height={386}
        />
      </div>
    </section>
  );
};

export default Product;
