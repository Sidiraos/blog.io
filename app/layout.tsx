import type { Metadata } from 'next'
import { Inter , Lato } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar/NavBar'
import Container from '@/container/Container'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Code.io',
  description: 'Le blog communautaire des développeurs',
  icons: {
    icon: '/app/favicon.ico', // /public path
  }
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <NavBar font='Lato' />
        <Container>
         {children}
        </Container>


      </body>
    </html>
  )
}
