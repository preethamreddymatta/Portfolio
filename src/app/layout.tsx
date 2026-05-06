import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Preetham Reddy — Data Scientist',
  description: 'Data Scientist specializing in ML pipelines, predictive modeling, forecasting, and translating raw data into measurable business outcomes.',
  keywords: ['Data Scientist', 'Machine Learning', 'MLOps', 'Python', 'AWS SageMaker', 'NLP', 'Forecasting'],
  authors: [{ name: 'Preetham Reddy Matta' }],
  openGraph: {
    title: 'Preetham Reddy — Data Scientist',
    description: 'Building intelligent systems that drive real business impact.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Outfit:wght@300;400;500;600&family=IBM+Plex+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
