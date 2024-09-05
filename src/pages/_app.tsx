import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Commissioner } from "next/font/google";

const inter = Commissioner({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}