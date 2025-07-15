import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luminar Solar',
  description: 'Landing page for Luminar Solar',
  generator: 'v0.dev',
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
