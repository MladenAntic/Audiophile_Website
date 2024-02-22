import Button from "@/components/Button";
import headphones from "@/public/homepage-hero-headphones.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-bg-dark h-full max-lg:h-screen">
      <div className="max-container flex-center -mt-14">
        <div className="text-text-light flex flex-col items-start gap-8 max-xl:gap-6 max-lg:absolute z-10 max-lg:flex-center max-lg:w-[80%] mx-auto max-lg:text-center max-lg:top-[50%] max-lg:translate-y-[-50%] max-sm:gap-4">
          <span className="text-[14px] font-normal tracking-[10px] uppercase max-sm:text-[12px]">
            New Product
          </span>
          <h1 className="text-[56px] font-bold leading-[58px] tracking-[2px] uppercase max-xl:text-[48px] max-sm:text-[40px] max-xs:text-[32px]">
            XX99 Mark II Headphones
          </h1>
          <p className="font-medium leading-[25px] max-sm:text-sm">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button
            background="bg-orange-dark"
            hoverBg="hover:bg-orange-light"
            text="text-text-light"
            hoverText="hover:text-text-dark"
            border="border-none"
            link="/headphones/xx99-mark2-headphones"
            index={1}
          />
        </div>

        <div className="max-lg:absolute max-lg:top-[50%] max-lg:translate-y-[-50%]">
          <Image src={headphones} alt="Headphones" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
