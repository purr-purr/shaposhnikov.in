import { useEffect, useState } from 'react';

import Cursor from '@modules/common/components/Cursor';
import ScrollProgress from '@modules/common/components/ScrollProgress';
import AppContextProvider from '@modules/layout/components/AppContextProvider';
import Footer from '@modules/layout/components/Footer';
import Header from '@modules/layout/components/Header';

import { ILayoutProps } from '@modules/layout/types';

import s from './Layout.module.scss';

const Layout = ({ children }: ILayoutProps) => {
	const [currentHoveredEl, setCurrentHoveredEl] = useState<string>('default');

	const handleMouseMove = (e: any) => {
		const x = e.clientX;
		const y = e.clientY;

		let elementMouseIsOver =
			document.elementFromPoint(x, y)?.closest('.hov') ||
			document.elementFromPoint(x, y)?.closest('.large-dot');

		let hoveredElement = elementMouseIsOver
			? elementMouseIsOver?.getAttribute('data-custom')
			: 'default';

		if (hoveredElement && hoveredElement !== currentHoveredEl) {
			setCurrentHoveredEl(hoveredElement);
		}
	};

	useEffect(() => {
		console.log(currentHoveredEl);
	}, [currentHoveredEl]);

	return (
		<>
			<AppContextProvider>
				<main className={s.container} id="main" onMouseMove={handleMouseMove}>
					<Header />
					<section className={s.inner}>
						{children}
						<Footer />
					</section>
					<ScrollProgress />
					<Cursor />
				</main>
			</AppContextProvider>
		</>
	);
};

export default Layout;
