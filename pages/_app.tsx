import '../styles/globals.css'
import '../styles/App.css'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Component {...pageProps} />
    </div>
  )
} 