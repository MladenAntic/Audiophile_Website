import Product from "@/components/ProductShowcase";
import Products from "@/components/Products";
import AudioGear from "@/components/AudioGear";

import { earphones } from "@/constants";

const page = () => {
  return (
    <div>
      <div className="page-title-container">
        <h1 className="page-title">Earphones</h1>
      </div>
      {earphones.map((earphone) => (
        <Product
          key={earphone.title}
          image={earphone.image}
          title={earphone.title}
          description={earphone.description}
          reverse={earphone.reverse}
          link={earphone.link}
          index={3}
        />
      ))}
      <Products />
      <AudioGear margin="my-56 mt-0" />
    </div>
  );
};

export default page;
