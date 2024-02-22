import Product from "@/components/ProductShowcase";
import Products from "@/components/Products";
import AudioGear from "@/components/AudioGear";

import { headphones } from "@/constants";

const page = () => {
  return (
    <div>
      <div className="page-title-container">
        <h1 className="page-title">Headphones</h1>
      </div>
      {headphones.map((headphone) => (
        <Product
          key={headphone.title}
          image={headphone.image}
          title={headphone.title}
          description={headphone.description}
          reverse={headphone.reverse}
          link={headphone.link}
          index={1}
        />
      ))}
      <Products />
      <AudioGear margin="my-56 mt-0" />
    </div>
  );
};

export default page;
