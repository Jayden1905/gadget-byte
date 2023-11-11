import NavMenu from '@/components/ui/nav'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gadget Byte',
  description: 'A ecomerce site for electronic gadgets',
  keywords: 'ecommerce, gadgets, electronics, shopping, online shopping',
}

export default async function HomePageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavMenu />
      <main className="pt-16">{children}</main>
    </>
  )
}
