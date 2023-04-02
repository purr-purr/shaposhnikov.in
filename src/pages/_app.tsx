import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import * as gtag from '@utils/gtag';

import '@styles/globals.scss';
import Head from 'next/head';

import Layout from '@modules/layout/components/Layout';

import { APP_META_TITLE } from '@utils/const';

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const isProduction = process.env.NODE_ENV === 'production';

	useEffect(() => {
		const handleRouteChange = (url: URL) => {
			isProduction && gtag.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Head>
				<title>{APP_META_TITLE}</title>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
