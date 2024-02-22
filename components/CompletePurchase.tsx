import { Dialog } from "@headlessui/react";
import completePurchaseIcon from "@/public/complete-purchase.svg";
import Image from "next/image";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

interface CompletePurchaseProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CompletePurchase = ({ isOpen, setIsOpen }: CompletePurchaseProps) => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.number,
    0
  );

  const shippingCost = 50;

  return (
    <Dialog open={isOpen} onClose={setIsOpen}>
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

      <Dialog.Panel className="fixed w-[540px] h-[570px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white rounded-lg p-10 max-sm:w-[90%] max-sm:h-max">
        <Image
          src={completePurchaseIcon}
          alt="Complete Purchase Icon"
          width={64}
          height={64}
        />
        <h3 className="text-[32px] font-bold leading-[36px] tracking-[1.136px] uppercase my-5">
          THANK YOU FOR YOUR ORDER!
        </h3>
        <small className="leading-[25px] opacity-70 max-sm:leading-normal">
          You will receive an email confirmation shortly.
        </small>
        <div className="flex h-[140px] my-10 max-sm:flex-col max-sm:mb-20">
          <div className="w-[444px] h-full rounded-tl-lg rounded-bl-lg bg-[#f1f1f1] flex flex-col p-5 max-sm:w-full">
            <div className="flex items-center gap-4 relative max-sm:gap-2">
              <Image
                src={cartItems[0].image}
                alt="Product Image"
                className="w-[32px] h-[32px]"
              />
              <div>
                <h5 className="font-bold text-text-dark uppercase leading-[25px] -mb-1">
                  {cartItems[0].name}
                </h5>
                <small className="text-[14px] text-text-dark font-bold leading-[25px] opacity-65">
                  $ {cartItems[0].price}
                </small>
              </div>
              <span className="absolute top-1 right-3 text-text-dark font-bold leading-[25px] max-sm:text-sm">
                x{cartItems[0].number}
              </span>
            </div>
            <hr className="my-4" />
            <small className="self-center text-[12px] font-bold tracking-[-0.214px] opacity-70">
              And {cartItems.length - 1} other item(s)
            </small>
          </div>
          <div className="w-[198px] h-full bg-bg-dark rounded-tr-lg rounded-br-lg flex-center flex-col max-sm:w-full max-sm:rounded-none max-sm:rounded-bl-lg max-sm:rounded-br-lg max-sm:py-1">
            <h5 className="leading-[25px] text-text-light uppercase opacity-70">
              Grand Total
            </h5>
            <span className="text-text-light text-[18px] font-bold uppercase">
              $ {totalAmount + shippingCost}
            </span>
          </div>
        </div>

        <Button
          className="w-full uppercase bg-orange-dark text-text-light outline-none rounded-sm py-3 px-6 font-bold tracking-[1px] hover:bg-orange-light hover:text-text-dark duration-300"
          onClick={() => setIsOpen(false)}
        >
          Close
        </Button>
      </Dialog.Panel>
    </Dialog>
  );
};

export default CompletePurchase;
