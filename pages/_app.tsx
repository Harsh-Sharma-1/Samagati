/* eslint-disable @next/next/no-css-tags */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Layout/Navbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
