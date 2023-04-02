/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		additionalData: `@import "src/assets/styles/variables.scss"; @import "src/assets/styles/mixins.scss";`,
	},
	images: {
		unoptimized: true,
	},
	trailingSlash: true,
	exportPathMap: async function () {
		return {
			'/': { page: '/' },
			'/404': { page: '/404' },
		};
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: {
				loader: 'url-loader',
			},
		});

		return config;
	},
};

module.exports = nextConfig;
