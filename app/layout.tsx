import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Hello Next',
  description: 'Next + Strapi boilerplate',
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
          bg-slate-950
          text-zinc-100
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  )
}
