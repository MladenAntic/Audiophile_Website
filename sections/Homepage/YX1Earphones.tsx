import Button from "@/components/Button";
import yx1Earphones from "@/public/yx1-earphones.png";
import Image from "next/image";

const ZX7Speaker = () => {
  return (
    <section className="max-container h-[320px] flex items-center mt-12 rounded-lg gap-36 bg-[#f1f1f1] overflow-hidden max-lg:gap-20 max-md:flex-col max-md:h-full max-md:pb-8 max-md:items-start max-sm:mb-28">
      <div className="h-full w-[50%] rounded-lg max-md:w-full max-md:h-[240px]">
        <Image
          src={yx1Earphones}
          alt="ZX7 Speaker"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="max-md:pl-5">
        <h3 className="text-[28px] font-bold tracking-[2px] uppercase mb-8 max-sm:text-xl max-sm:mb-4">
          YX1 Earphones
        </h3>
        <Button
          background="bg-transparent"
          hoverBg="hover:bg-bg-dark"
          text="text-text-dark"
          hoverText="hover:text-text-light"
          border="border-2 border-black"
          link="/earphones/yx1-wireless-earphones"
          index={3}
        />
      </div>
    </section>
  );
};

export default ZX7Speaker;
