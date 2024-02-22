"use client";

import { headphones, xx99Mark1BoxItems, youMayAlsoLike2 } from "@/constants";
import ProductBuy from "@/components/ProductBuy";
import Features from "@/components/Features";

import { xx99Mark1Description } from "@/constants";

import xx99Mark1Gallery1 from "@/public/xx99-mark1-gallery1.png";
import xx99Mark1Gallery2 from "@/public/xx99-mark1-gallery2.png";
import xx99Mark1Gallery3 from "@/public/xx99-mark1-gallery3.png";
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

  const pageKey = "xx99Mark1Headphones";
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
      name: "xx99 Mk I",
      price: 1750,
      number: count,
      image: headphones[1].image,
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
        image={headphones[1].image}
        title={headphones[1].title}
        description={headphones[1].description}
        price={headphones[1].price}
        buttonText={buttonText}
        onButtonClick={handleButtonClick}
      />
      <Features
        descriptionTop={xx99Mark1Description.descriptionTop}
        descriptionBottom={xx99Mark1Description.descriptionBottom}
        array={xx99Mark1BoxItems}
      />
      <Gallery
        image1={xx99Mark1Gallery1}
        image2={xx99Mark1Gallery2}
        image3={xx99Mark1Gallery3}
        image1Alt="XX99 Mark1 Gallery Image 1"
        image2Alt="XX99 Mark1 Gallery Image 2"
        image3Alt="XX99 Mark1 Gallery Image 3"
      />
      <YouMayLike array={youMayAlsoLike2} />
      <Products />
      <AudioGear margin="my-56 mt-0" />
    </div>
  );
};

export default page;
