import Product from "@/components/ProductShowcase";
import Products from "@/components/Products";
import AudioGear from "@/components/AudioGear";

import { speakers } from "@/constants";

const page = () => {
  return (
    <div>
      <div className="page-title-container">
        <h1 className="page-title">Speakers</h1>
      </div>
      {speakers.map((speaker) => (
        <Product
          key={speaker.title}
          image={speaker.image}
          title={speaker.title}
          description={speaker.description}
          reverse={speaker.reverse}
          link={speaker.link}
          index={2}
        />
      ))}
      <Products />
      <AudioGear margin="my-56 mt-0" />
    </div>
  );
};

export default page;
