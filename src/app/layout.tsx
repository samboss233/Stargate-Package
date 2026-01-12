import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stargate',
  icons: {
    icon: '/favicon.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <title>Stargate</title>
      </head>
      <body>{children}</body>
    </html>
  )
}

