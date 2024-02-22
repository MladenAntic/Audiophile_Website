"use client";

import { speakers, zx9SpeakerBoxItems, youMayAlsoLike4 } from "@/constants";
import ProductBuy from "@/components/ProductBuy";
import Features from "@/components/Features";

import { zx9SpeakerDescription } from "@/constants";

import zx9SpeakerGallery1 from "@/public/zx9-speaker-gallery1.png";
import zx9SpeakerGallery2 from "@/public/zx9-speaker-gallery2.png";
import zx9SpeakerGallery3 from "@/public/zx9-speaker-gallery3.png";
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

  const pageKey = "zx9Speaker";
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
      name: "zx9",
      price: 4500,
      number: count,
      image: speakers[0].image,
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
        image={speakers[0].image}
        title={speakers[0].title}
        description={speakers[0].description}
        price={speakers[0].price}
        buttonText={buttonText}
        onButtonClick={handleButtonClick}
      />
      <Features
        descriptionTop={zx9SpeakerDescription.descriptionTop}
        descriptionBottom={zx9SpeakerDescription.descriptionBottom}
        array={zx9SpeakerBoxItems}
      />
      <Gallery
        image1={zx9SpeakerGallery1}
        image2={zx9SpeakerGallery2}
        image3={zx9SpeakerGallery3}
        image1Alt="ZX9 Speaker Gallery Image 1"
        image2Alt="ZX9 Speaker Gallery Image 2"
        image3Alt="ZX9 Speaker Gallery Image 3"
      />
      <YouMayLike array={youMayAlsoLike4} />
      <Products />
      <AudioGear margin="my-56 mt-0" />
    </div>
  );
};

export default page;
