"use client";

import GoBack from "@/components/GoBack";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import Image from "next/image";
import { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { formSchema } from "@/constants";
import CompletePurchase from "@/components/CompletePurchase";

const page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
      eMoneyNumber: "",
      eMoneyPin: "",
    },
  });

  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const [overflow, setOverflow] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    cartItems.length <= 3
      ? setOverflow("overflow-y-hidden")
      : setOverflow("overflow-y-scroll");
  });

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.number,
    0
  );

  const shippingCost = 50;

  const summary = [
    {
      text: "Total",
      margin: "",
      calculation: totalAmount,
    },
    {
      text: "Shipping",
      margin: "my-2",
      calculation: shippingCost,
    },
    {
      text: "VAT (INCLUDED)",
      margin: "",
      calculation: totalAmount * 0.2,
    },
    {
      text: "Grand Total",
      margin: "my-7",
      calculation: totalAmount + shippingCost,
    },
  ];

  const handleSubmit = () => {
    form.trigger().then((isValid) => {
      if (isValid) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    });
  };

  return (
    <div className="pt-14 relative">
      <GoBack />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-container mt-10 mb-20 flex items-start justify-center gap-6 max-xl:flex-col max-xl:items-center"
        >
          <div className="w-[730px] bg-white shadow-2xl p-8 max-md:w-full">
            <h2 className="text-[32px] font-bold leading-[36px] tracking-[1.143px] uppercase mb-8">
              Checkout
            </h2>
            <div>
              <div>
                <h4 className="form-group">Billing Details</h4>
                <div className="md:flex-between md:gap-2 max-md:flex-col max-md:items-start max-md:w-full">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="form-item">
                        <FormLabel className="form-label">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Alexei Ward"
                            {...field}
                            className="form-input"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="form-item">
                        <FormLabel className="form-label">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="alexei@mail.com"
                            {...field}
                            type="email"
                            className="form-input"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="form-item">
                      <FormLabel className="form-label">Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+1 202-555-0136"
                          {...field}
                          type="tel"
                          className="form-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="my-14">
                <h4 className="form-group">Shipping Info</h4>
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem className="form-item">
                      <FormLabel className="form-label">Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="1137 Williams Avenue"
                          {...field}
                          className="h-[56px] max-sm:w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="md:flex-between md:gap-2 max-md:flex-col max-md:items-start max-md:w-full">
                  <FormField
                    control={form.control}
                    name="zipCode"
                    render={({ field }) => (
                      <FormItem className="form-item">
                        <FormLabel className="form-label">ZIP Code</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="10001"
                            {...field}
                            className="form-input"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem className="form-item">
                        <FormLabel className="form-label">City</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="New York"
                            {...field}
                            className="form-input"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem className="form-item">
                      <FormLabel className="form-label">Country</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="United States"
                          {...field}
                          className="form-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <h4 className="form-group">Payment Details</h4>
                <div className="flex md:items-start md:justify-between mt-6 max-md:flex-col max-xl:gap-3 max-md:w-full">
                  <Label className="form-label">Payment Method</Label>
                  <RadioGroup defaultValue="option-one">
                    <div className="form-input flex items-center pl-3 gap-2 rounded-lg">
                      <RadioGroupItem value="option-one" id="option-one" />
                      <Label
                        htmlFor="option-one"
                        className="text-[14px] font-bold tracking-[-0.25px]"
                      >
                        e-Money
                      </Label>
                    </div>
                    <div className="form-input flex items-center pl-3 gap-2 rounded-lg">
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label
                        htmlFor="option-two"
                        className="text-[14px] font-bold tracking-[-0.25px]"
                      >
                        Cash on Delivery
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="md:flex-between md:gap-2 max-md:flex-col max-md:items-start max-md:w-full">
                  <FormField
                    control={form.control}
                    name="eMoneyNumber"
                    render={({ field }) => (
                      <FormItem className="form-item">
                        <FormLabel className="form-label">
                          e-Money Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="238521993"
                            type="number"
                            {...field}
                            className="form-input"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="eMoneyPin"
                    render={({ field }) => (
                      <FormItem className="form-item">
                        <FormLabel className="form-label">
                          e-Money PIN
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="6891"
                            type="number"
                            {...field}
                            className="form-input"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-[350px] h-[612px] bg-white shadow-xl p-6 max-xl:w-[730px] max-md:w-full">
            <h3 className="text-[18px] font-bold tracking-[1.286px] uppercase mb-5">
              Summary
            </h3>
            <div
              className={`my-7 flex flex-col gap-6 h-[240px] ${overflow} scrollbar-hide`}
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
                    <div className="bg-[#f1f1f1]">
                      <div className="text-[15px] font-bold leading-[25px] p-2">
                        x{item.number}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {summary.map((item) => (
              <div className={`flex-between ${item.margin}`}>
                <span className="summary-label">{item.text}</span>
                <span className="text-[18px] font-bold uppercase max-sm:text-[14px]">
                  $ {item.calculation}
                </span>
              </div>
            ))}

            <Button
              type="submit"
              className="w-full h-[48px] bg-orange-dark text-text-light text-[13px] font-bold tracking-[1px] uppercase border-none outline-none hover:bg-orange-light hover:text-text-dark duration-300"
            >
              Continue & pay
            </Button>
          </div>
        </form>
      </Form>
      {isOpen === true ? (
        <CompletePurchase isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default page;
