import Image from "next/image";
import zx9Speaker from "@/public/zx9-speaker.png";
import Button from "@/components/Button";

const ZX9Speaker = () => {
  return (
    <section className="max-container bg-orange-dark h-[560px] rounded-lg flex-center gap-28 overflow-hidden max-xl:gap-12 max-lg:flex-col max-lg:gap-40 relative">
      <Image
        src={zx9Speaker}
        alt="ZX9 Speaker"
        width={410}
        height={493}
        className="-mb-32 max-lg:w-[197px] max-lg:h-[237px] relative z-10"
      />

      <div className="text-text-light flex flex-col gap-8 items-start max-lg:justify-center max-lg:items-center max-lg:text-center relative z-10">
        <h2 className="text-[56px] font-bold leading-[58px] tracking-[2px] uppercase max-sm:text-3xl max-xs:text-2xl">
          ZX9 SPEAKER
        </h2>
        <p className="font-medium leading-[25px] w-[349px] max-sm:text-sm max-sm:w-[90%] max-sm:mx-auto">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button
          background="bg-bg-dark"
          hoverBg="hover:bg-bg-light"
          text="text-text-light"
          hoverText="hover:text-text-dark"
          border="border-none"
          link="/speakers/zx9-speaker"
          index={2}
        />
      </div>

      <div className="w-[944px] h-[944px] circle left-[-50px] top-[-75px]"></div>
      <div className="w-[542px] h-[542px] circle left-[50px] bottom-[-150px]"></div>
      <div className="w-[472px] h-[472px] circle left-[85px] bottom-[-125px]"></div>
    </section>
  );
};

export default ZX9Speaker;
