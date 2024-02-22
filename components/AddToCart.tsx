"use client";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { RootState } from "@/app/store";
import { decrement, increment } from "@/slices/cartCounterSlice";

interface AddToCartProps {
  buttonText: string;
  onButtonClick: () => void;
}

const AddToCart = ({ buttonText, onButtonClick }: AddToCartProps) => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  useEffect(() => {
    if (cartItems.length === 0) {
      buttonText = "Add To Cart";
    }
  }, [cartItems]);

  return (
    <div className="flex items-center gap-4 max-lg:flex-center max-sm:flex-col">
      <div className="bg-[#f1f1f1] flex-between w-[120px] h-[48px] px-4 max-sm:w-full">
        <div className="cursor-pointer" onClick={() => dispatch(decrement())}>
          -
        </div>
        <div className="cursor-pointer">{count}</div>
        <div className="cursor-pointer" onClick={() => dispatch(increment())}>
          +
        </div>
      </div>
      <button
        type="button"
        className="w-[160px] h-[48px] bg-orange-dark text-[13px] text-center text-text-light flex-center font-bold tracking-[1px] uppercase cursor-pointer hover:bg-orange-light hover:text-text-dark duration-200 max-sm:w-full"
        onClick={onButtonClick}
        disabled={buttonText === "In Cart!"}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default AddToCart;
