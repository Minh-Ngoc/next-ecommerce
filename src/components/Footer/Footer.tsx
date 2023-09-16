"use client";

import Link from "next/link";
import Logo from "../Logo";
import { featuresNav, contactUsNav, followusNav, menuNav } from "./variable";
import { Input, Button } from "@nextui-org/react";

function Footer() {
  return (
    <div className="flex flex-col bg-black">
      <div className="grid grid-cols-6 px-8 py-24">
        {/* logo */}
        <div className="flex items-start">
          <Logo />
        </div>
        {/* FEATURES */}
        <div className="flex flex-col">
          <span className="fz-18 font-semibold mb-10">FEATURES</span>
          <ul>
            {featuresNav?.map((item) => (
              <li className="py-1 fz-13 font-normal clr-gray-82">
                <Link href={item.href}>{item.content}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* MENU */}
        <div className="flex flex-col">
          <span className="fz-18 font-semibold mb-10">MENU</span>
          <ul>
            {menuNav?.map((item) => (
              <li className="py-1 fz-13 font-normal clr-gray-82">
                <Link href={item.href}>{item.content}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* CONTACT US */}
        <div className="flex flex-col">
          <span className="fz-18 font-semibold mb-10">CONTACT US</span>
          <ul>
            {contactUsNav?.map((item) => (
              <li className="py-1 fz-13 font-normal clr-gray-82">
                <span className="text-white font-semibold">{item.title}</span>
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* FOLLOW US */}
        <div className="flex flex-col">
          <span className="fz-18 font-semibold mb-10">FOLLOW US</span>
          <ul>
            {followusNav?.map((item) => (
              <li className="flex items-center py-1 fz-13 font-normal clr-gray-82">
                <a href={item.href}>{item.icon}</a>{" "}
                <span className="px-4">{item.content}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* JOIN US */}
        <div className="flex flex-col">
          <span className="fz-18 font-semibold mb-10">JOIN US</span>
          <ul>
            <li className="flex items-center py-1 fz-13 font-normal clr-gray-82">
              SUBSCRIBE TO OUR NEWSLETTERS
            </li>
          </ul>
          <Input placeholder="Email Address" variant="bordered" radius="none" />
          <br />
          <Button radius="none" className="bg-white text-black font-normal">
            SUBSCRIBE!
          </Button>
        </div>
      </div>
      {/* break line */}
      <div className="px-8">
        <hr className="w-full border-gray-4f"/>
      </div>
      <span className="px-8 py-4 pb-16">© 2023 by leon</span>
    </div>
  );
}

export default Footer;
