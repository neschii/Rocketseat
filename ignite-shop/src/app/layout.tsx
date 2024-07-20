
import { Roboto } from 'next/font/google'

const roboto = Roboto({ 
  weight: ['400', '700'],
  subsets: ['greek'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={roboto.className}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}