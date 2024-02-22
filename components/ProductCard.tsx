"use client"

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useActiveIndex } from "@/contexts/ActiveIndexContext";

type ProductCardProps = {
  image: StaticImageData;
  title: string;
  link: string;
  index: number;
};

const ProductCard = ({ image, title, link, index }: ProductCardProps) => {
  const { setIndex } = useActiveIndex();

  return (
    <div className="w-[350px] h-[204px] bg-[#f1f1f1] flex flex-col justify-end text-center relative pb-6 max-md:w-full">
      <div className="absolute top-[-80px] left-[50%] translate-x-[-50%]">
        <Image src={image} alt="Product Headphones" width={123} height={160} />
        <div className="w-[122px] h-[18px] bg-black blur-[21.746253967285156px] absolute bottom-[-10px]"></div>
      </div>
      <h4 className="mb-3 text-text-dark text-[18px] font-bold tracking-[1.286px] uppercase">
        {title}
      </h4>
      <Link
        href={link}
        className="flex-center gap-2 text-text-dark text-[13px] font-bold tracking-[1px] uppercase group hover:text-orange-dark duration-300 w-16 mx-auto"
        onClick={() => setIndex(index)}
      >
        Shop
        <ChevronRightIcon className="w-[10px] h-[10px] relative group-hover:left-[5px]" />
      </Link>
    </div>
  );
};

export default ProductCard;