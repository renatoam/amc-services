import type { AppProps } from "next/app";

import "@shared/styles/global.css";
import DefaultLayout from "@shared/layout/default";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}
