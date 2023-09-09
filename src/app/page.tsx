"use client";

import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import Carousel from "@/components/Carousel";
import { Image } from "@nextui-org/react";
import banner from "@/assets/imgs/banner/banner.png";
import Banner from "@/components/Banner";

export default function Home() {

  const items: any = [
    <Banner />,
    <Image
      src={banner.src}
      loading="eager"
      className="w-full h-auto"
      removeWrapper
    />,
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className="p-6 w-full">
        <Carousel items={items} />
        <ProductList />
      </div>
    </main>
  );
}
