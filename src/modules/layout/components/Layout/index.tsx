import { useCallback, useState } from 'react';

import ScrollToTop from '@modules/common/components/ScrollToTop';
import Star from '@modules/common/components/Star';
import Footer from '@modules/layout/components/Footer';
import Header from '@modules/layout/components/Header';
import AppContext from '@modules/layout/context';
import cn from 'classnames';

import { LayoutProps } from '@modules/layout/types';

import s from './Layout.module.scss';

const Layout = ({ children }: LayoutProps) => {
	const [isNavigationMode, setIsNavigationMode] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [isScrollDown, setIsScrollDown] = useState(false);
	const [starRotateDegree, setStarRotateDegree] = useState(0);

	const handleNavigationMode = useCallback((value: boolean) => {
		setIsNavigationMode(value);
	}, []);

	const handleDarkMode = useCallback((value: boolean) => {
		setIsDarkMode(value);
	}, []);

	const context = {
		isNavigationMode,
		isDarkMode,
		handleNavigationMode,
		handleDarkMode,
	};

	const handleScroll = (e: any) => {
		const { scrollHeight, scrollTop, clientHeight } = e.target;
		setStarRotateDegree(scrollTop);

		const isPageBottom = scrollHeight - scrollTop === clientHeight;
		isPageBottom ? setIsScrollDown(true) : setIsScrollDown(false);
	};

	return (
		<>
			<AppContext.Provider value={context}>
				<main
					className={cn(s.container, isDarkMode && 'darkMode', 'defaultMode')}
					onScroll={(e) => handleScroll(e)}
					id="main"
				>
					<Header />
					<section className={s.inner}>
						{children}
						<Footer />
					</section>
					<ScrollToTop isScrollDown={isScrollDown} />
					<Star degree={starRotateDegree} />
				</main>
			</AppContext.Provider>
		</>
	);
};

export default Layout;
