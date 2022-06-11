import DefaultLayout from "@shared/layout/default";
import "@shared/styles/global.css";
import 'animate.css';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}
