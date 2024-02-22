import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

import { socialIcons } from "@/constants";
import NavItems from "@/components/NavItems";

const Footer = () => {
  return (
    <footer className="text-text-light bg-bg-dark py-20">
      <div className="max-container flex items-start justify-between max-lg:flex-center max-lg:flex-col max-lg:gap-8">
        <div className="max-lg:text-center max-lg:flex-center max-lg:flex-col">
          <Image src={logo} alt="Audiophile Logo" className="mb-7" />
          <p className="opacity-50 leading-[25px] w-[540px] mb-12 max-xl:w-[450px] max-lg:w-full mx-auto max-sm:text-sm">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className="opacity-50 max-sm:text-sm">
            Copyright 2024. All Rights Reserved
          </p>
        </div>

        <div className="max-lg:flex-center max-lg:flex-col max-lg:text-center">
          <div className="flex gap-10 mb-32 uppercase max-xl:gap-5 max-lg:mb-10 max-sm:flex-col">
            <NavItems />
          </div>
          <div className="flex gap-4 justify-end">
            {socialIcons.map((social) => (
              <Link href={social.link}>
                <Image src={social.image} alt={social.alt} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
