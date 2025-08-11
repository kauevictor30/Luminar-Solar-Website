import type { Metadata } from 'next'
import './globals.css'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'Especialistas em energia solar fotovoltaica: projeto, aprovação, instalação e suporte completo no Piauí.',
  applicationName: siteConfig.name,
  generator: 'kauevictor.dev',
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: siteConfig.name,
    siteName: siteConfig.name,
    description:
      'Soluções completas de energia solar fotovoltaica no Piauí. Economize na conta de luz com a Luminar Solar.',
    locale: 'pt_BR',
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImagePath}`,
        width: 1200,
        height: 630,
        alt: 'Luminar Solar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description:
      'Projeto, instalação e suporte de energia solar fotovoltaica. Atendemos todo o Piauí.',
    images: [`${siteConfig.url}${siteConfig.ogImagePath}`],
  },
  robots: {
    index: true,
    follow: true,
    // Substitui objeto por string para maior compatibilidade tipada
    googleBot:
      'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  },
  icons: {
    icon: '/icone-site.png',
    shortcut: '/icone-site.png',
    apple: '/icone-site.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImagePath}`,
    telephone: siteConfig.contact.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.company.address,
      addressCountry: 'BR',
    },
    areaServed: ['Luzilândia', 'Parnaíba', 'Piauí'],
    sameAs: [
      siteConfig.social.instagramUrl,
      siteConfig.social.facebookUrl,
      siteConfig.social.linkedinUrl,
    ],
  }

  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
