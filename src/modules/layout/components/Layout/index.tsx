import { useCallback, useState } from 'react';

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
	const [scrollPosition, setScrollPosition] = useState(0);
	const [pageHeight, setPageHeight] = useState(0);

	const handleNavigationMode = useCallback((value: boolean) => {
		setIsNavigationMode(value);
	}, []);

	const handleDarkMode = useCallback((value: boolean) => {
		setIsDarkMode(value);
	}, []);

	const handleScrollPosition = useCallback((value: number) => {
		setScrollPosition(value);
	}, []);

	const context = {
		isNavigationMode,
		isDarkMode,
		scrollPosition,
		handleNavigationMode,
		handleDarkMode,
		handleScrollPosition,
	};

	const handleScroll = (e: any) => {
		const { scrollHeight, scrollTop, clientHeight } = e.target;

		setScrollPosition(scrollTop);

		const scrollBeginning = scrollTop || 0;
		const totalHeight = scrollHeight - clientHeight;
		const calcScrollPercent = (scrollBeginning / totalHeight) * 100;
		const scrollPercent = Number(calcScrollPercent.toFixed(0));
		setPageHeight(scrollPercent);

		scrollPercent === 100 ? setIsScrollDown(true) : setIsScrollDown(false);
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
					<Star degree={scrollPosition} percent={pageHeight} />
				</main>
			</AppContext.Provider>
		</>
	);
};

export default Layout;
