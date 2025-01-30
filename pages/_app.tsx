import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '@/store/store'
import { Provider } from 'react-redux'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <main className="container mx-auto p-4">
        <Component {...pageProps} />;
      </main>
      <Footer />
    </Provider>
  )
}
