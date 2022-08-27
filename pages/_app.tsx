/* eslint-disable @next/next/no-css-tags */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Layout/Navbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <>
            <SessionProvider session={session}>
                <Navbar />
                <Component {...pageProps} />
            </SessionProvider>
        </>
    );
}

export default MyApp;
