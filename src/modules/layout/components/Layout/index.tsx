import { useCallback, useState } from 'react';

import Cursor from '@modules/common/components/Cursor';
import ScrollProgress from '@modules/common/components/ScrollProgress';
import Footer from '@modules/layout/components/Footer';
import Header from '@modules/layout/components/Header';
import AppContext from '@modules/layout/context';

import { ILayoutProps } from '@modules/layout/types';

import s from './Layout.module.scss';

const Layout = ({ children }: ILayoutProps) => {
	const [isNavigationMode, setIsNavigationMode] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);

	const handleNavigationMode = useCallback((value: boolean) => {
		setIsNavigationMode(value);
	}, []);

	const handleScrollPosition = useCallback((value: number) => {
		setScrollPosition(value);
	}, []);

	const context = {
		isNavigationMode,
		scrollPosition,
		handleNavigationMode,
		handleScrollPosition,
	};

	return (
		<>
			<AppContext.Provider value={context}>
				<main className={s.container} id="main">
					<Header />
					<section className={s.inner}>
						{children}
						<Footer />
					</section>
					<ScrollProgress />
					<Cursor />
				</main>
			</AppContext.Provider>
		</>
	);
};

export default Layout;
