import { ShopInfo } from "@/types/shopInfo";
import { FacebookIcon } from "../Icons/Facebook";
import { InstagramIcon } from "../Icons/Instagram";
import { TwitterIcon } from "../Icons/Twitter";

interface Item {
  title?: any;
  content?: any;
  icon?: any;
  href?: any;
}

const shopInfo: ShopInfo = {
  name: "LISA",
  address: "123 STREET NAME, CITY, ENGLAND",
  phone: "(123) 456-7890",
  email: "MAIL@EXAMPLE.COM",
  workingInfo: "MON - SUN / 9:00AM - 8:00PM",
  facebook: "https://www.facebook.com/",
  instagram: "",
  twitter: "",
};

export const featuresNav: Item[] = [
  {
    content: "MEN",
    href: "/category/men",
  },
  {
    content: "WOMEN",
    href: "/category/women",
  },
  {
    content: "BOYS",
    href: "/category/boys",
  },
  {
    content: "GIRLS",
    href: "/category/girls",
  },
  {
    content: "NEW ARRIVALS",
    href: "/category/new-arrivals",
  },
  {
    content: "SHOES",
    href: "/category/shoes",
  },
  {
    content: "COTHES",
    href: "/category/cothes",
  },
  {
    content: "ACCESSORIES",
    href: "/category/accessories",
  },
];

export const menuNav: Item[] = [
  {
    content: "ABOUT US",
    href: "/about-us",
  },
  {
    content: "CONTACT US",
    href: "/contact-us",
  },
  {
    content: "MY ACCOUNT",
    href: "/profile",
  },
  {
    content: "ORDERS HISTORY",
    href: "/order-history",
  },
  {
    content: "MY WISHLIST",
    href: "/my-wishlist",
  },
  {
    content: "BLOG",
    href: "/blog",
  },
  {
    content: "LOGIN",
    href: "/login",
  },
];

export const contactUsNav: Item[] = [
  {
    title: "ADDRESS",
    content: shopInfo.address,
  },
  {
    title: "PHONE",
    content: shopInfo.phone,
  },
  {
    title: "EMAIL",
    content: shopInfo.email,
  },
  {
    title: "WORKING DAYS/HOURS",
    content: shopInfo.workingInfo,
  },
];

export const followusNav: Item[] = [
  {
    content: "FACEBOOK",
    icon: <FacebookIcon width="30px" height="30px" />,
    href: shopInfo.address && shopInfo.address,
  },
  {
    content: "INSTAGRAM",
    icon: <InstagramIcon width="30px" height="30px" />,
    href: shopInfo.address && shopInfo.address,
  },
  {
    content: "TWITTER",
    icon: <TwitterIcon width="30px" height="30px" />,
    href: shopInfo.address && shopInfo.address,
  },
];
