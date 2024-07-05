import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head';

export const metadata = {
  title: 'Unlimi',
  description: 'Blutech assignment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
