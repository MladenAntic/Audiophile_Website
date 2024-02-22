"use client";

import { useState, Fragment } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { navItems } from "@/constants";
import Link from "next/link";
import logo from "@/public/logo.svg";
import Image from "next/image";

type ToggleMenuProps = {
  screen: string;
};

const ToggleMenu = ({ screen }: ToggleMenuProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {screen === "mobile" ? (
        <Bars3Icon
          onClick={() => setMobileMenuOpen(true)}
          className={`w-5 h-5 text-text-light hidden max-sm:block cursor-pointer`}
        />
      ) : (
        <Bars3Icon
          onClick={() => setMobileMenuOpen(true)}
          className={`w-5 h-5 text-text-light hidden max-md:block max-sm:hidden cursor-pointer`}
        />
      )}

      <Transition as={Fragment} show={mobileMenuOpen}>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-10" />

            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="-m-2.5 border-none outline-none p-2.5 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <XMarkIcon
                    className="h-6 w-6 hover:text-orange-dark transition-colors duration-200"
                    aria-hidden="true"
                  />
                </button>
              </div>

              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-5 py-6">
                    {navItems.map((item) => (
                      <Link
                        key={item.text}
                        href={item.link}
                        className="-mx-3 block uppercase rounded-lg px-3 py-4 text-2xl font-semibold leading-7 text-white hover:bg-orange-dark hover:text-text-light duration-200"
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>

                  <Image
                    src={logo}
                    alt="Maya Greentech Dialog Logo"
                    className="mx-auto mt-20"
                    width={200}
                  />
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default ToggleMenu;
