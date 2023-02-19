import { useCallback, useEffect, useState } from 'react';

import Footer from '@modules/layout/components/Footer';
import Header from '@modules/layout/components/Header';
import AppContext from '@modules/layout/context';
import cn from 'classnames';

import s from './Layout.module.scss';

import { LayoutProps } from '@modules/layout/types';

const Layout = ({ children }: LayoutProps) => {
	const [isNavigationMode, setIsNavigationMode] = useState(false);

	const handleNavigationMode = useCallback((value: boolean) => {
		setIsNavigationMode(value);
	}, []);

	const context = {
		isNavigationMode,
		handleNavigationMode,
	};

	// useEffect(() => {
	// 	const element = document.querySelector('html');
	// 	if (element) {
	// 		element.setAttribute(
	// 			'class',
	// 			`${isNavigationMode ? `defaultTheme darkTheme` : `defaultTheme`}`,
	// 		);
	// 	}
	// }, [isNavigationMode]);

	return (
		<>
			<AppContext.Provider value={context}>
				<main className={cn(s.container, isNavigationMode && 'darkTheme', 'defaultTheme')}>
					<Header />
					<section>{children}</section>
					<Footer />
				</main>
			</AppContext.Provider>
		</>
	);
};

export default Layout;
