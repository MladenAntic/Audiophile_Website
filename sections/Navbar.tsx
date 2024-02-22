import Image from "next/image";
import logo from "@/public/logo.svg";
import ToggleMenu from "@/components/ToggleMenu";
import NavItems from "@/components/NavItems";
import CartIcon from "@/components/CartIcon";

const Navbar = () => {
  return (
    <nav className="pt-9 bg-bg-dark max-sm:border-b max-sm:border-gray-600 relative z-10">
      <div className="max-container flex-between border-b border-gray-600 pb-9 max-sm:border-none">
        <ToggleMenu screen="mobile" />

        <div className="flex-center gap-8">
          <ToggleMenu screen="tablet" />
          <Image src={logo} width={143} height={25} alt="Audiophile Logo" />
        </div>

        <div className="text-text-light uppercase flex-center gap-[34px] font-semibold max-lg:text-sm max-lg:gap-6 max-md:hidden">
          <NavItems />
        </div>

        <CartIcon />
      </div>
    </nav>
  );
};

export default Navbar;
