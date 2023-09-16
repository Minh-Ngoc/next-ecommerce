"use client";

import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import { Button, Image, Tabs, Tab, Chip, Link } from "@nextui-org/react";
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
import { Product } from "@/types";
import ProductCard from "@/components/ProductCard";
import Featured from "@/components/Featured";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

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
    <div
      className={`${
        className ? " " + className : ""
      }flex-1 flex items-center justify-center z-20${
        title == "Up to <br /> 40% off" ? " absolute top-1/2 left-[10%]" : ""
      }`}
    >
      <div className="flex flex-col">
        <h1
          dangerouslySetInnerHTML={{ __html: title }}
          className={`${
            title == "Up to <br /> 40% off"
              ? "text-7xl leading-tight"
              : "text-4xl leading-[50px]"
          } font-extrabold line-clamp-2 uppercase`}
        />
        <p className="font-bold text-xl"> {desc} </p>
        <div className="mt-10">
          <Button
            size="lg"
            spinner
            radius="none"
            {...rest}
            className="py-7 px-8 uppercase tracking-wide bg-transparent border-black hover:bg-black hover:text-white border-4 text-xl text-black font-bold"
          >
            {titleBtn}
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

  const TabCategoryItems = [
    { label: "New Arrivals", icon: "", quantity: "10" },
    { label: "Our Key Icons", icon: "", quantity: "7" },
    { label: "Your Running Gear 🏃", icon: "", quantity: "16" },
  ];

  const products: Product[] = [
    {
      _id: 1,
      productName: "Men's Lightweight Full-Zip Basketball Jacket",
      productImages: [
        {
          urlImage:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6150f894-8ee1-4a72-8006-44e6b3997d46/sportswear-club-fleece-joggers-KflRdQ.png",
        },
        {
          urlImage:
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d7bea0d8-6f4a-489b-8a83-f9167eaf3488/mens-basketball-t-shirt-RDWf6G.png",
        },
      ],
      stock: [
        {
          price: 130,
          quantity: 100,
          sizeID: "S",
          colorID: "black",
        },
        {
          price: 130,
          quantity: 100,
          sizeID: "L",
          colorID: "white",
        },
      ],
      categoryID: "123",
      brand: "Nike",
    },
    {
      _id: 2,
      productName: "Men's Lightweight Full-Zip Basketball Jacket",
      productImages: [
        {
          urlImage:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6150f894-8ee1-4a72-8006-44e6b3997d46/sportswear-club-fleece-joggers-KflRdQ.png",
        },
        {
          urlImage:
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d7bea0d8-6f4a-489b-8a83-f9167eaf3488/mens-basketball-t-shirt-RDWf6G.png",
        },
      ],
      stock: [
        {
          price: 130,
          quantity: 100,
          sizeID: "M",
          colorID: "white",
        },
      ],
      categoryID: "123",
      brand: "Nike",
    },
    {
      _id: 3,
      productName: "Men's Lightweight Full-Zip Basketball Jacket",
      productImages: [
        {
          urlImage:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6150f894-8ee1-4a72-8006-44e6b3997d46/sportswear-club-fleece-joggers-KflRdQ.png",
        },
        {
          urlImage:
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d7bea0d8-6f4a-489b-8a83-f9167eaf3488/mens-basketball-t-shirt-RDWf6G.png",
        },
      ],
      stock: [
        {
          price: 130,
          quantity: 100,
          sizeID: "S",
          colorID: "black",
        },
        {
          price: 130,
          quantity: 100,
          sizeID: "L",
          colorID: "white",
        },
      ],
      categoryID: "123",
      brand: "Nike",
    },
    {
      _id: 4,
      productName: "Men's Lightweight Full-Zip Basketball Jacket",
      productImages: [
        {
          urlImage:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6150f894-8ee1-4a72-8006-44e6b3997d46/sportswear-club-fleece-joggers-KflRdQ.png",
        },
        {
          urlImage:
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d7bea0d8-6f4a-489b-8a83-f9167eaf3488/mens-basketball-t-shirt-RDWf6G.png",
        },
      ],
      stock: [
        {
          price: 130,
          quantity: 100,
          sizeID: "M",
          colorID: "white",
        },
      ],
      categoryID: "123",
      brand: "Nike",
    },
    {
      _id: 5,
      productName: "Men's Lightweight Full-Zip Basketball Jacket",
      productImages: [
        {
          urlImage:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6150f894-8ee1-4a72-8006-44e6b3997d46/sportswear-club-fleece-joggers-KflRdQ.png",
        },
        {
          urlImage:
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d7bea0d8-6f4a-489b-8a83-f9167eaf3488/mens-basketball-t-shirt-RDWf6G.png",
        },
      ],
      stock: [
        {
          price: 130,
          quantity: 100,
          sizeID: "S",
          colorID: "black",
        },
        {
          price: 130,
          quantity: 100,
          sizeID: "L",
          colorID: "white",
        },
      ],
      categoryID: "123",
      brand: "Nike",
    },
    {
      _id: 6,
      productName: "Men's Lightweight Full-Zip Basketball Jacket",
      productImages: [
        {
          urlImage:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6150f894-8ee1-4a72-8006-44e6b3997d46/sportswear-club-fleece-joggers-KflRdQ.png",
        },
        {
          urlImage:
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d7bea0d8-6f4a-489b-8a83-f9167eaf3488/mens-basketball-t-shirt-RDWf6G.png",
        },
      ],
      stock: [
        {
          price: 130,
          quantity: 100,
          sizeID: "M",
          colorID: "white",
        },
      ],
      categoryID: "123",
      brand: "Nike",
    },
  ];

  const productList = products?.map((product) => (
    <ProductCard key={product._id} product={product} />
  ));

  return (
    <main className="flex min-h-screen flex-col items-center max-w-[100%] overflow-hidden">
      <Header />
      <div className="p-6 w-full">
        {/* ****************************  Carousel ******************************* */}
        <Carousel items={items} />

        {/* Brands */}
        <div className="my-16 select-none flex flex-wrap gap-4 justify-center relative border-solid border-2 border-[#C4C4C4] py-6">
          <p className="uppercase text-2xl text-black font-extrabold absolute -top-4 text-center bg-white leading-8 px-14">
            Chose your brand
          </p>
          {brandListComp}
        </div>

        {/* **************************** Brands sales **************************** */}
        <div className="grid grid-rows-2 grid-cols-2 grid-flow-col gap-4 max-h-[800px]">
          {bannerSaleItems.map((item: any, index: number) => (
            <div
              style={{ backgroundColor: item.bg }}
              className={`z-10 relative ${item.className}${
                item.image == bannerSale2.src ? " flex-row-reverse" : ""
              }`}
              key={index}
            >
              <Image
                src={item.image}
                loading="eager"
                className={`object-contain !object-right ${
                  item.className == "row-span-2" ? "w-full" : "w-auto"
                } block h-auto rounded-none max-h-[800px]`}
                removeWrapper
              />
              {WrapperTitleSale({
                title: item.title,
                desc: item.desc,
                titleBtn: item.titleBtn,
              })}
            </div>
          ))}
        </div>

        {/* **************************** New Arrivals **************************** */}
        <div className="flex flex-col gap-4 my-16 px-10">
          <div className="flex w-full items-center justify-between">
            <Tabs
              aria-label="Options"
              variant="bordered"
              radius="none"
              classNames={{
                tabList: "gap-6 w-full relative rounded-none p-0 border-none",
                cursor: "w-full bg-black",
                tab: "max-w-fit px-5 h-14 border-2 border-black",
                tabContent: "group-data-[selected=true]:text-white text-black",
              }}
            >
              {TabCategoryItems.map((item: any, index: number) => (
                <Tab
                  key={index}
                  title={
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl"> {item.label} </span>
                      <Chip
                        size="md"
                        color="danger"
                        radius="md"
                        variant="solid"
                      >
                        {" "}
                        {item.quantity ? item.quantity : 0}{" "}
                      </Chip>
                      {item.icon}
                    </div>
                  }
                />
              ))}
            </Tabs>
            <Link 
              isBlock 
              showAnchorIcon 
              href="/new-arrivals" 
              color="primary"
              className="text-2xl font-bold"
            >
              VIEW ALL
            </Link>
          </div>

          {/* **************************** Product List **************************** */}
          <div className="flex gap-4 pb-10 overflow-x-scroll overscroll-x-contain scrollbar">
            {productList}
          </div>
        </div>

        {/* **************************** Featured **************************** */}
        <Featured />

        {/* **************************** Blog **************************** */}
        <Blog />
      </div>
      <Footer />
    </main>
  );
}
