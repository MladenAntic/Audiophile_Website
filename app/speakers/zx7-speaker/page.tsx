"use client";

import { speakers, zx7SpeakerBoxItems, youMayAlsoLike5 } from "@/constants";
import ProductBuy from "@/components/ProductBuy";
import Features from "@/components/Features";

import { zx7SpeakerDescription } from "@/constants";

import zx7SpeakerGallery1 from "@/public/zx7-speaker-gallery1.png";
import zx7SpeakerGallery2 from "@/public/zx7-speaker-gallery2.png";
import zx7SpeakerGallery3 from "@/public/zx7-speaker-gallery3.png";
import Gallery from "@/components/Gallery";
import YouMayLike from "@/components/YouMayLike";
import Products from "@/components/Products";
import AudioGear from "@/components/AudioGear";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/slices/cartSlice";
import { RootState } from "@/app/store";
import GoBack from "@/components/GoBack";

const page = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const pageKey = "zx7Speaker";
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
      name: "zx7",
      price: 3500,
      number: count,
      image: speakers[1].image,
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
        image={speakers[1].image}
        title={speakers[1].title}
        description={speakers[1].description}
        price={speakers[1].price}
        buttonText={buttonText}
        onButtonClick={handleButtonClick}
      />
      <Features
        descriptionTop={zx7SpeakerDescription.descriptionTop}
        descriptionBottom={zx7SpeakerDescription.descriptionBottom}
        array={zx7SpeakerBoxItems}
      />
      <Gallery
        image1={zx7SpeakerGallery1}
        image2={zx7SpeakerGallery2}
        image3={zx7SpeakerGallery3}
        image1Alt="ZX7 Speaker Gallery Image 1"
        image2Alt="ZX7 Speaker Gallery Image 2"
        image3Alt="ZX7 Speaker Gallery Image 3"
      />
      <YouMayLike array={youMayAlsoLike5} />
      <Products />
      <AudioGear margin="my-56 mt-0" />
    </div>
  );
};

export default page;
