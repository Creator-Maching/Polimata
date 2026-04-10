import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Image from "next/image"

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Produções',
  description: 'Produções',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`
          ${inter.className}
          min-h-screen
          flex flex-col
          bg-blue-100
          text-black
        `}
      >
        
        <header className="
          bg-gray-200 
          p-4
          flex 
          flex-col 
          md:flex-row 
          items-center 
          justify-center 
          text-center
        ">
          
          <Image 
            src="/images/coffeIcon.png" 
            alt="Coffe" 
            width={120} 
            height={120}
            className="mb-2 md:mb-0 md:mr-4"
          />

          <h1 className="
            text-2xl 
            sm:text-3xl 
            md:text-5xl 
            font-bold
          ">
            Acervo do Polimata
          </h1>

        </header>

        <Nav />

        <main className="flex-1 px-4 sm:px-6 md:px-10">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  )
}
