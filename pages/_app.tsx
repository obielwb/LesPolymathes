import '../styles/global/globals.scss';
import '../styles/pages/index.scss';

import type { AppProps } from 'next/app';
import Image from 'next/image';
import Head from 'next/head';


import logo from '../assets/Les Polymathes.svg';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Les Polymathes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Scheherazade+New&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Seaweed+Script&display=swap" rel="stylesheet"></link>
      </Head>

      <header>
        <Link href={'/'}>
          <a><Image src={logo} width={155} height={38} alt="Logo" /></a>
        </Link>
        <nav className="navMenu">
          <Link href={'/'}>Home</Link>
          <Link href={'/historic'}>Historic</Link>
          <div className="dot"></div>
        </nav>
      </header>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
