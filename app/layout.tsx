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
        
        <header className="bg-gray-200 p-5 flex items-center justify-center">
          <Image src="/images/coffeIcon.png" alt="Coffe" width={200} height={200} />
          <h1 className="text-5xl font-bold text-center m-3 p-3">
            Acervo do Polimata
          </h1>
        </header>

        <Nav />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  )
}