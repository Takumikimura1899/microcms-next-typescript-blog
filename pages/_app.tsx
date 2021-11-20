import '../styles/globals.css';
// import 'tailwindcss/tailwind.css';
import { CssBaseline } from '@nextui-org/react';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
