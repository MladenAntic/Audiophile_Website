import Button from "@/components/Button";
import zx7Speaker from "@/public/zx7-speaker-layer.png";
import Image from "next/image";

const ZX7Speaker = () => {
  return (
    <section className="max-container h-[320px] flex items-center justify-start my-12 rounded-lg overflow-hidden">
      <div className="absolute pl-28 max-sm:pl-14 max-xs:pl-7">
        <h3 className="text-[28px] font-bold tracking-[2px] uppercase mb-8 max-sm:text-xl max-sm:mb-4">
          ZX7 Speaker
        </h3>
        <Button
          background="bg-transparent"
          hoverBg="hover:bg-bg-dark"
          text="text-text-dark"
          hoverText="hover:text-text-light"
          border="border-2 border-black"
          link="/speakers/zx7-speaker"
          index={2}
        />
      </div>

      <Image
        src={zx7Speaker}
        alt="ZX7 Speaker"
        className="w-full h-full rounded-lg object-cover"
      />
    </section>
  );
};

export default ZX7Speaker;
