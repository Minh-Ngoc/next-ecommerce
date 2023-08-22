import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import bgImage from '@/assets/imgs/bg-login-2.jpg';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  const bgStyle = {
    backgroundImage: `url(${bgImage.src})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div className={`w-full object-scale-down h-screen`} style={bgStyle}>
        <div className='text-white'>
          {children}
        </div>
    </div>
  )
}
