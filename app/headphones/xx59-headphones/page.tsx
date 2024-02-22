"use client";

import { headphones, xx59BoxItems, youMayAlsoLike3 } from "@/constants";
import ProductBuy from "@/components/ProductBuy";
import Features from "@/components/Features";

import { xx59Description } from "@/constants";

import xx59Gallery1 from "@/public/xx59-gallery1.png";
import xx59Gallery2 from "@/public/xx59-gallery2.png";
import xx59Gallery3 from "@/public/xx59-gallery3.png";
import Gallery from "@/components/Gallery";
import YouMayLike from "@/components/YouMayLike";
import Products from "@/components/Products";
import AudioGear from "@/components/AudioGear";
import { useEffect, useState } from "react";
import { addToCart } from "@/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import GoBack from "@/components/GoBack";

const page = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const pageKey = "x59Headphones";
  const [buttonText, setButtonText] = useState(() => {
    const savedButtonText = localStorage.getItem(pageKey);
    return savedButtonText || "Add To Cart";
  });

  useEffect(() => {
    const savedButtonText = localStorage.getItem(pageKey);
    if (savedButtonText) {
      setButtonText(savedButtonText);
    }
  }, [pageKey]);

  useEffect(() => {
    if (cartItems.length === 0) {
      setButtonText("Add To Cart");
    } else {
      const itemExists = cartItems.some((item) => item.id === pageKey);
      if (!itemExists) {
        setButtonText("Add To Cart");
      }
    }
  }, [cartItems, pageKey]);

  const handleButtonClick = () => {
    const itemToAdd = {
      id: pageKey,
      name: "xx59",
      price: 899,
      number: count,
      image: headphones[2].image,
    };
    dispatch(addToCart(itemToAdd));

    const newButtonText =
      buttonText === "Add To Cart" ? "In Cart!" : "Add To Cart";
    localStorage.setItem(pageKey, newButtonText);
    setButtonText(newButtonText);
  };

  return (
    <div className="pt-14">
      <GoBack />
      <ProductBuy
        image={headphones[2].image}
        title={headphones[2].title}
        description={headphones[2].description}
        price={headphones[2].price}
        buttonText={buttonText}
        onButtonClick={handleButtonClick}
      />
      <Features
        descriptionTop={xx59Description.descriptionTop}
        descriptionBottom={xx59Description.descriptionBottom}
        array={xx59BoxItems}
      />
      <Gallery
        image1={xx59Gallery1}
        image2={xx59Gallery2}
        image3={xx59Gallery3}
        image1Alt="XX59 Gallery Image 1"
        image2Alt="XX59 Gallery Image 2"
        image3Alt="XX59 Gallery Image 3"
      />
      <YouMayLike array={youMayAlsoLike3} />
      <Products />
      <AudioGear margin="my-56 mt-0" />
    </div>
  );
};

export default page;
