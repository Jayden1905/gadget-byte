import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'
import Providers from '@/components/providers/providers'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Gadget Byte',
  description: 'A ecomerce site for electronic gadgets',
  keywords: 'ecommerce, gadgets, electronics, shopping, online shopping',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${lato.className} dark scroll-smooth`}>
          {children}
        </body>
      </Providers>
    </html>
  )
}
