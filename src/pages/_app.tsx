import type { AppProps } from 'next/app'

import '@shared/styles/global.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
