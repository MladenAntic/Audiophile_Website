import Image, { StaticImageData } from "next/image";

type GalleryProps = {
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;

  image1Alt: string;
  image2Alt: string;
  image3Alt: string;
};

const Gallery = ({
  image1,
  image2,
  image3,
  image1Alt,
  image2Alt,
  image3Alt,
}: GalleryProps) => {
  return (
    <section className="max-container flex gap-8 mb-40 max-lg:flex-col">
      <div className="flex flex-col gap-8">
        <Image src={image1} alt={image1Alt} className="rounded-lg flex-1 max-lg:w-full" />
        <Image src={image2} alt={image2Alt} className="rounded-lg flex-1 max-lg:w-full" />
      </div>
      <Image src={image3} alt={image3Alt} className="rounded-lg flex-1 max-lg:w-full" />
    </section>
  );
};

export default Gallery;
