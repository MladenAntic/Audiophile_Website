import Image from "next/image";
import audioGear from "@/public/audio-gear.png";

type AudioGearProps = {
  margin: string;
};

const AudioGear = ({ margin }: AudioGearProps) => {
  return (
    <section
      className={`max-container flex-between ${margin} max-lg:flex-col-reverse max-lg:gap-16`}
    >
      <div className="max-lg:text-center">
        <h2 className="heading-2 mb-8 max-sm:w-full mx-auto">
          Bringing you the <span className="text-orange-dark">best</span> audio
          gear
        </h2>
        <p className="product-description mb-0 max-sm:w-full max-lg:mx-auto">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <div className="rounded-lg flex-center">
        <Image
          src={audioGear}
          alt="Audio Gear"
          className="rounded-lg object-contain"
        />
      </div>
    </section>
  );
};

export default AudioGear;
