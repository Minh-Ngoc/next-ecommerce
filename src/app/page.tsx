"use client";

import Header from "@/components/Header";
import ProductCard from '@/components/ProductCard';
import { Product } from "@/types";

export default function Home() {
  const product: Product = {
    id: 1,
    name: "Men's Lightweight Full-Zip Basketball Jacket",
    price: 130,
    quantity: 100,
    images: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6150f894-8ee1-4a72-8006-44e6b3997d46/sportswear-club-fleece-joggers-KflRdQ.png", 
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d7bea0d8-6f4a-489b-8a83-f9167eaf3488/mens-basketball-t-shirt-RDWf6G.png", 
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a2e3e946-efbd-4c1d-9fe3-baa71fe33a58/mens-basketball-t-shirt-RDWf6G.png"
  ],
    category: "Clothing",
    brand: "Nike",
    size: ["S", "M", "L", "XL", "2XL", "3XL"],
    color: ["black", "white"]
  }
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header /> 
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </div> 
    </main>
  )
}
