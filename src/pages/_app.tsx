import { AuthProvider } from '@/hooks/AuthProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { BrowserRouter } from 'react-router-dom'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps}></Component>
    </AuthProvider>
  )
}
