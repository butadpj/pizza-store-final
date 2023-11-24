"use client";

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import CartIcon from "./CartIcon";

const navigation = [
  { name: "Socials", href: "#" },
  { name: "Contact Us", href: "#" },
];

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="navbar fixed flex w-full items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 flex items-center gap-2 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image src={"/icon.png"} width={35} height={35} />
            <span className="text-xl font-bold text-gray-900">
              Maczela's <span className="text-red-600">Pizza</span>
            </span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <CartIcon />
      </nav>
      <MobileMenu
        navigation={navigation}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </>
  );
}

export default Nav;
