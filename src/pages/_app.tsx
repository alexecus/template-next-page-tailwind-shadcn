import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Nunito } from "next/font/google";
import { ReactElement, ReactNode } from "react";

import "@/styles/globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <main className={`${nunito.variable} font-nunito`}>
        {getLayout(<Component {...pageProps} />)}
      </main>
    </>
  );
}
