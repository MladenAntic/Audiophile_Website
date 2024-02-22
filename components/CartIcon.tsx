"use client";

import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";
import {
  incrementItemQuantity,
  decrementItemQuantity,
  removeAllFromCart,
  removeCartItem,
} from "@/slices/cartSlice";
import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

const CartIcon = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const [overflow, setOverflow] = useState("");

  const toggleOverflow = () => {
    cartItems.length <= 3
      ? setOverflow("overflow-y-hidden")
      : setOverflow("overflow-y-scroll");
  };

  return (
    <>
      <div
        className="relative cursor-pointer"
        onClick={() => {
          setIsOpen(true);
          toggleOverflow();
        }}
      >
        <ShoppingCartIcon className="w-5 h-5 text-text-light" />

        {cartItems.length < 1 ? (
          <></>
        ) : (
          <div className="absolute w-[15px] h-[15px] bg-orange-dark text-text-light rounded-full top-[-5px] right-[-7.5px] flex-center text-center text-[10px] font-bold">
            {cartItems.length}
          </div>
        )}
      </div>

      <Dialog open={isOpen} onClose={setIsOpen}>
        <div className="fixed inset-0 bg-black/30 z-10" aria-hidden="true" />

        <Dialog.Panel className="fixed right-[10%] top-28 w-[377px] rounded-lg shadow-lg bg-white z-10 p-6 max-sm:right-[50%] max-sm:translate-x-[50%] max-sm:w-[90%]">
          {cartItems.length < 1 ? (
            <div className="flex-center flex-col">
              <ShoppingCartIcon
                width={100}
                height={100}
                className="text-gray-500 opacity-50"
              />
              <span className="block mt-3 text-text-dark">
                Your cart is empty
              </span>
            </div>
          ) : (
            <>
              <div className="flex-between">
                <h4 className="text-text-dark text-[18px] font-bold tracking-[1.286px] uppercase">
                  Cart <span>({cartItems.length})</span>
                </h4>
                <small
                  className="text-text-black leading-[25px] underline cursor-pointer opacity-75"
                  onClick={() => {
                    dispatch(removeAllFromCart());
                  }}
                >
                  Remove all
                </small>
              </div>

              <div
                className={`my-6 flex flex-col gap-6 h-[240px] ${overflow} scrollbar-hide`}
              >
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex-between max-xs:flex-col max-xs:items-start max-xs:gap-2"
                  >
                    <div className="flex-center gap-3">
                      <div className="w-[64px] h-[64px] bg-[#f1f1f1] rounded-lg flex-center p-2">
                        <Image
                          src={item.image}
                          alt="Product Image"
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h5 className="font-bold leading-[25px] uppercase">
                          {item.name}
                        </h5>
                        <small className="text-[14px] font-bold opacity-50">
                          $ {item.price}
                        </small>
                      </div>
                    </div>
                    <div className="flex-center gap-2 max-xs:justify-start max-xs:w-[200px]">
                      <div className="bg-[#f1f1f1] flex-between w-[96px] h-[32px] px-4 max-xs:w-[150px]">
                        <div
                          className="cursor-pointer"
                          onClick={() =>
                            dispatch(decrementItemQuantity(item.id))
                          }
                        >
                          -
                        </div>
                        <div className="cursor-pointer">{item.number}</div>
                        <div
                          className="cursor-pointer"
                          onClick={() =>
                            dispatch(incrementItemQuantity(item.id))
                          }
                        >
                          +
                        </div>
                      </div>

                      <XMarkIcon
                        width={20}
                        height={20}
                        className="text-red-500 cursor-pointer"
                        onClick={() => dispatch(removeCartItem(item.id))}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex-between mb-6">
                <h6 className="leading-[25px] opacity-50 uppercase">Total</h6>
                <p className="text-text-dark text-[18px] font-bold uppercase">
                  ${" "}
                  <span>
                    {cartItems.reduce(
                      (total, item) => total + item.price * item.number,
                      0
                    )}
                  </span>
                </p>
              </div>

              <Link
                href="/checkout"
                className="border-none outline-none"
                onClick={() => setIsOpen(false)}
              >
                <button
                  type="button"
                  className="w-full h-[48px] bg-orange-dark text-text-light text-[13px] font-bold tracking-[1px] uppercase border-none outline-none hover:bg-orange-light hover:text-text-dark duration-300"
                >
                  Checkout
                </button>
              </Link>
            </>
          )}
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default CartIcon;
