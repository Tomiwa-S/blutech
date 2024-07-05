import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head';

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Unlimi',
  description: 'Blutech assignment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
    {/* Not to be used in production */}
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />  
    </Head>
      <body>{children}</body>
    </html>
  )
}
