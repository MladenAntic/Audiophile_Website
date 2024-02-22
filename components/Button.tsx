"use client"

import { useActiveIndex } from "@/contexts/ActiveIndexContext";
import Link from "next/link";

type ButtonProps = {
  background: string;
  hoverBg: string;
  text: string;
  hoverText: string;
  border: string;
  link: string;
  index: number
};

const Button = ({
  background,
  hoverBg,
  text,
  hoverText,
  border,
  link,
  index
}: ButtonProps) => {
  const { setIndex } = useActiveIndex();

  return (
    <Link
      href={`${link}`}
      className={`uppercase ${background} ${text} outline-none rounded-sm py-3 px-6 font-bold tracking-[1px] ${hoverBg} duration-300 ${hoverText} ${border}`}
      onClick={() => setIndex(index)}
    >
      See Product
    </Link>
  );
};

export default Button;
