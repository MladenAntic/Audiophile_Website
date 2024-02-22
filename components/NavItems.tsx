"use client";

import { navItems } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useActiveIndex } from "@/contexts/ActiveIndexContext";

const NavItems = () => {
  const { setIndex } = useActiveIndex();

  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const storedIndex = localStorage.getItem("activeIndex");
    const currentIndex = navItems.findIndex((item) =>
      pathname.includes(item.link)
    );

    if (storedIndex !== null) {
      setActiveIndex(Number(storedIndex));
    } else {
      setActiveIndex(currentIndex);
      localStorage.setItem("activeIndex", String(currentIndex));
    }
  }, [pathname]);

  const handleLinkClick = (index: number) => {
    setIndex(index);
  };

  return (
    <>
      {navItems.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          onClick={() => {
            handleLinkClick(index);
          }}
          className={
            activeIndex === index
              ? "text-orange-dark hover-link"
              : "text-text-light hover-link"
          }
        >
          {item.text}
        </Link>
      ))}
    </>
  );
};

export default NavItems;
