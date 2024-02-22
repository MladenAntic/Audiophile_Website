import productHeadphones from "@/public/product-card-headphones.png";
import productSpeakers from "@/public/product-card-speakers.png";
import productEarphones from "@/public/product-card-earphones.png";

import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="py-52 max-lg:pt-[300px] max-md:py-52">
      <div className="max-container flex-center gap-8 max-lg:gap-4 max-md:flex-col max-md:space-y-20">
        <ProductCard
          image={productHeadphones}
          title="Headphones"
          link="/headphones"
          index={1}
        />
        <ProductCard
          image={productSpeakers}
          title="Speakers"
          link="/speakers"
          index={2}
        />
        <ProductCard
          image={productEarphones}
          title="Earphones"
          link="/earphones"
          index={3}
        />
      </div>
    </section>
  );
};

export default Products;
