import type { Metadata } from "next";
import { Roboto } from 'next/font/google'

export const metadata: Metadata = {
  title: "Ignite Shop",
  description: "",
};

const roboto = Roboto({ 
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={roboto.className}>
      <body>{children}</body>
    </html>
  )
}
