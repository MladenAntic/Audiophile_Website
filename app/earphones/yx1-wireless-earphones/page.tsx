"use client";

import { earphones, yx1EarphonesBoxItems, youMayAlsoLike6 } from "@/constants";
import ProductBuy from "@/components/ProductBuy";
import Features from "@/components/Features";

import { yx1EarphonesDescription } from "@/constants";

import yx1EarphonesGallery1 from "@/public/yx1-earphones-gallery1.png";
import yx1EarphonesGallery2 from "@/public/yx1-earphones-gallery2.png";
import yx1EarphonesGallery3 from "@/public/yx1-earphones-gallery3.png";
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

  const pageKey = "yx1WirelessEarphones";
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
      name: "yx1",
      price: 599,
      number: count,
      image: earphones[0].image,
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
        image={earphones[0].image}
        title={earphones[0].title}
        description={earphones[0].description}
        price={earphones[0].price}
        buttonText={buttonText}
        onButtonClick={handleButtonClick}
      />
      <Features
        descriptionTop={yx1EarphonesDescription.descriptionTop}
        descriptionBottom={yx1EarphonesDescription.descriptionBottom}
        array={yx1EarphonesBoxItems}
      />
      <Gallery
        image1={yx1EarphonesGallery1}
        image2={yx1EarphonesGallery2}
        image3={yx1EarphonesGallery3}
        image1Alt="YX1 Earphones Gallery Image 1"
        image2Alt="YX1 Earphones Gallery Image 2"
        image3Alt="YX1 Earphones Gallery Image 3"
      />
      <YouMayLike array={youMayAlsoLike6} />
      <Products />
      <AudioGear margin="my-56 mt-0" />
    </div>
  );
};

export default page;
