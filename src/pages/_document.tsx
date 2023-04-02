import { Head, Html, Main, NextScript } from 'next/document';

import {
	APP_AUTHOR,
	APP_AUTHOR_SIGNATURE,
	APP_LINK,
	APP_META_DESC,
	APP_META_KEY_WORDS,
	APP_META_TITLE,
	GA_TRACKING_ID,
} from '@utils/const';

export default function Document() {
	const isProduction = process.env.NODE_ENV === 'production';
	const manifestPath = '/assets/manifest.webmanifest';
	const FAVICON = '/assets/favicon.ico';
	const LOGO = '/assets/logo.png';

	return (
		<Html lang="en">
			<Head>
				<link href={FAVICON} rel="icon" />
				<meta content="#fff" name="theme-color" />
				<meta content={APP_META_DESC} name="description" />
				<link href={FAVICON} rel="apple-touch-icon" />
				<link href={manifestPath} rel="manifest" />
				<meta name="description" content={APP_META_DESC} />
				<meta name="keywords" content={APP_META_KEY_WORDS} />
				<meta name="author" content={APP_AUTHOR + ' ' + APP_AUTHOR_SIGNATURE} />
				<meta name="image" content={LOGO} />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={APP_META_TITLE} />
				<meta property="og:description" content={APP_META_DESC} />
				<meta property="og:image" content={LOGO} />
				<meta property="og:url" content={APP_LINK} />
				<link rel="canonical" href={APP_LINK} />
				<meta name="apple-mobile-web-app-title" content={APP_META_TITLE} />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="format-detection" content="telephone=no" />
				<meta name="format-detection" content="address=no" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
				<link
					crossOrigin="anonymous"
					href="/assets/font/ObjectSans/font.css"
					rel="stylesheet"
				/>

				{isProduction && (
					<>
						<script
							async
							src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
						/>
						<script
							dangerouslySetInnerHTML={{
								__html: `
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());
                                    gtag('config', '${GA_TRACKING_ID}', {
                                      page_path: window.location.pathname,
                                    });
                                  `,
							}}
						/>
					</>
				)}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
