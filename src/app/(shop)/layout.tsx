'use client'

import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center max-w-[100%] overflow-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
