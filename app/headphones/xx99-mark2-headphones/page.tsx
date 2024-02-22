"use client";

import { headphones, xx99Mark2BoxItems, youMayAlsoLike1 } from "@/constants";
import ProductBuy from "@/components/ProductBuy";
import Features from "@/components/Features";

import { xx99Mark2Description } from "@/constants";

import xx99Mark2Gallery1 from "@/public/xx99-mark2-gallery1.png";
import xx99Mark2Gallery2 from "@/public/xx99-mark2-gallery2.png";
import xx99Mark2Gallery3 from "@/public/xx99-mark2-gallery3.png";
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

  const pageKey = "x99Mark2Headphones";
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
      name: "xx99 Mk II",
      price: 2999,
      number: count,
      image: headphones[0].image,
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
        image={headphones[0].image}
        title={headphones[0].title}
        description={headphones[0].description}
        price={headphones[0].price}
        buttonText={buttonText}
        onButtonClick={handleButtonClick}
      />
      <Features
        descriptionTop={xx99Mark2Description.descriptionTop}
        descriptionBottom={xx99Mark2Description.descriptionBottom}
        array={xx99Mark2BoxItems}
      />
      <Gallery
        image1={xx99Mark2Gallery1}
        image2={xx99Mark2Gallery2}
        image3={xx99Mark2Gallery3}
        image1Alt="XX99 Mark2 Gallery Image 1"
        image2Alt="XX99 Mark2 Gallery Image 2"
        image3Alt="XX99 Mark2 Gallery Image 3"
      />
      <YouMayLike array={youMayAlsoLike1} />
      <Products />
      <AudioGear margin="my-56 mt-0" />
    </div>
  );
};

export default page;
