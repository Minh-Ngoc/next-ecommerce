"use client";

import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import Carousel from "@/components/Carousel";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header /> 
      <Carousel />
      <ProductList />
    </main>
  )
}
