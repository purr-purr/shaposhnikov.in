import { CSSProperties, useCallback, useEffect, useState } from 'react';

import Star from '@modules/common/components/Star';
import Footer from '@modules/layout/components/Footer';
import Header from '@modules/layout/components/Header';
import AppContext from '@modules/layout/context';

import { LayoutProps } from '@modules/layout/types';

import s from './Layout.module.scss';

interface CursorPosition {
	x: number;
	y: number;
}

const Layout = ({ children }: LayoutProps) => {
	const [isNavigationMode, setIsNavigationMode] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);
	const [pageHeight, setPageHeight] = useState(0);

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

	const handleScroll = (e: any) => {
		const { scrollHeight, scrollTop, clientHeight } = e.target;

		setScrollPosition(scrollTop);

		const scrollBeginning = scrollTop || 0;
		const totalHeight = scrollHeight - clientHeight;
		const calcScrollPercent = (scrollBeginning / totalHeight) * 100;
		const scrollPercent = Number(calcScrollPercent.toFixed(0));
		setPageHeight(scrollPercent);
	};

	const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			setCursorPosition({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	const cursorStyle: CSSProperties = {
		transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
	};

	return (
		<>
			<AppContext.Provider value={context}>
				<main className={s.container} onScroll={(e) => handleScroll(e)} id="main">
					{!isNavigationMode && (
						<>
							<span style={cursorStyle} className={s.cursor} />
							<span style={cursorStyle} className={s.aura} />
						</>
					)}
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
