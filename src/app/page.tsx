"use client";

import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import Carousel from "@/components/Carousel";
import { Button, Image } from "@nextui-org/react";
import bannerNike from "@/assets/imgs/banner/banner-nike.png";
import bannerAdidas from "@/assets/imgs/banner/banner-adidas.avif";
import Banner from "@/components/Banner";
import brandAdidas from "@/assets/imgs/brands/adidas.png";
import brandNike from "@/assets/imgs/brands/nike.png";
import brandDior from "@/assets/imgs/brands/dior.png";
import brandGucci from "@/assets/imgs/brands/gucci.png";
import brandChanel from "@/assets/imgs/brands/chanel.png";
import bannerSale1 from "@/assets/imgs/banner-sale/sale1.png";
import bannerSale2 from "@/assets/imgs/banner-sale/sale2.png";
import bannerSale3 from "@/assets/imgs/banner-sale/sale3.png";

export default function Home() {
  const items: any = [
    <Banner />,
    <Image
      src={bannerNike.src}
      loading="eager"
      className="w-full h-auto object-cover"
      removeWrapper
    />,
    <Image
      src={bannerAdidas.src}
      loading="eager"
      className="w-full h-auto object-fill"
      removeWrapper
    />,
  ];

  const brandImgs: any = [
    brandAdidas.src,
    brandNike.src,
    brandDior.src,
    brandGucci.src,
    brandChanel.src,
  ];

  const brandListComp = brandImgs.map((item: any, index: number) => (
    <Image
      key={index}
      src={item}
      width={235}
      height={141}
      loading="eager"
      className="object-contain aspect-[3/2]"
    />
  ));

  const WrapperTitleSale = ({
    className,
    title,
    desc,
    titleBtn,
    ...rest
  }: {
    className?: string;
    title?: any;
    desc?: string;
    titleBtn?: string;
  }) => (
    <div className={`${className ? ' ' + className : ''}flex-1 flex items-center justify-center z-20${title == "Up to <br /> 40% off" ? " absolute top-1/2 left-[10%]" : ""}`}>
      <div className="flex flex-col">
        <h1 dangerouslySetInnerHTML={{ __html: title }} className={`${title == "Up to <br /> 40% off" ? "text-7xl" : "text-4xl"} font-extrabold line-clamp-2 uppercase`} />
        <p className="font-bold text-xl"> { desc } </p>
        <div className="mt-10">
          <Button
            size="lg"
            spinner
            radius="none"
            {...rest}
            className="py-7 px-8 uppercase tracking-wide bg-transparent border-black hover:bg-black hover:text-white border-4 text-xl text-black font-bold"
          >
            { titleBtn }
          </Button>
        </div>
      </div>
    </div>
  );

  const bannerSaleItems: any = [
    {
      className: "row-span-1 flex",
      bg: "#efedee",
      image: bannerSale1.src,
      title: "Choose <br /> your look",
      desc: "See our clothing collections",
      titleBtn: "See offers",
    },
    {
      className: "row-span-1 flex",
      bg: "#f0d8d0",
      image: bannerSale2.src,
      title: "Brand new style",
      desc: "Popular clothing brands",
      titleBtn: "See offers",
    },
    {
      className: "row-span-2",
      bg: "#dfdcd4",
      image: bannerSale3.src,
      title: "Up to <br /> 40% off",
      desc: "Special offers and great deals",
      titleBtn: "Show now",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className="p-6 w-full">
        {/* Carousel */}
        <Carousel items={items} />

        {/* Brands */}
        <div className="my-16 select-none flex flex-wrap gap-4 justify-center relative border-solid border-2 border-[#C4C4C4] py-6">
          <p className="uppercase text-2xl text-black font-extrabold absolute -top-4 text-center bg-white leading-8 px-14">
            Chose your brand
          </p>
          {brandListComp}
        </div>

        {/* Brands sales */}
        <div className="grid grid-rows-2 grid-cols-2 grid-flow-col gap-4 max-h-[800px]">
          { bannerSaleItems.map((item: any, index: number) => (
              <div style={{ backgroundColor: item.bg }} className={`z-10 relative ${item.className}${item.image == bannerSale2.src ? ' flex-row-reverse' : ''}`} key={index}>
                <Image
                  src={item.image}
                  loading="eager"
                  className={`object-contain !object-right ${item.className == "row-span-2" ? 'w-full' : 'w-auto'} block h-auto rounded-none max-h-[800px]`}
                  removeWrapper
                />
                { WrapperTitleSale({
                  title: item.title,
                  desc: item.desc,
                  titleBtn: item.titleBtn,
                }) }
              </div>
          )) }
        </div>

        {/* Product List */}
        <ProductList />
      </div>
    </main>
  );
}
