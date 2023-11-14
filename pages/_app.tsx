import Modal from '@/components/Modal'
import { AppContext } from '@/context/AppContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false)

  return <AppContext.Provider value={{ open, setOpen }}>
    <Modal />
    <Component {...pageProps} />
  </AppContext.Provider>
}
