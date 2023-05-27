import Cursor from '@modules/common/components/Cursor';
import ScrollProgress from '@modules/common/components/ScrollProgress';
import AppContextProvider from '@modules/layout/components/AppContextProvider';
import Footer from '@modules/layout/components/Footer';
import Header from '@modules/layout/components/Header';
import cn from 'classnames';

import { useDetectSlowBrowsers, useMediaQuery } from '@modules/common/hooks';

import { MOBILE_BREAKPOINT } from '@utils/const';

import { ILayoutProps } from '@modules/layout/types';

import s from './Layout.module.scss';

const Layout = ({ children }: ILayoutProps) => {
	const isSlowBrowser = useDetectSlowBrowsers();
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	return (
		<AppContextProvider>
			<main
				className={cn(
					s.container,
					isSlowBrowser || isMobile ? s.defaultCursor : s.hiddenCursor,
				)}
				id="main"
			>
				<Header />
				<section className={s.inner}>
					{children}
					<Footer />
				</section>
				<ScrollProgress />
				<Cursor />
			</main>
		</AppContextProvider>
	);
};

export default Layout;
