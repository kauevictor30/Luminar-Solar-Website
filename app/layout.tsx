import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luminar Solar',
  description: 'Landing page for Luminar Solar',
  generator: 'kauevictor.dev',
  icons: {
    icon: '/icone-site.png', // aqui aponta pro arquivo dentro da pasta public
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
