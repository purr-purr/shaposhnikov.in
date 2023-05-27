import { CSSProperties, FC, useContext, useEffect, useState } from 'react';

import CursorPoster from '@modules/common/components/CursorPoster';
import AppContext from '@modules/layout/context';
import cn from 'classnames';

import { useMediaQuery } from '@modules/common/hooks';

import { MOBILE_BREAKPOINT } from '@utils/const';

import { ICursorPosition } from '@modules/common/types';

import useDetectSlowBrowsers from '../../hooks/useDetectSlowBrowsers';
import s from './Cursor.module.scss';

const Cursor: FC = () => {
	const { isNavigationMode, cursorState, handleCursorState } =
		useContext(AppContext);

	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

	const [cursorPosition, setCursorPosition] = useState<ICursorPosition>({
		x: 0,
		y: 0,
	});

	const [currentHoveredEl, setCurrentHoveredEl] = useState<string>('default');

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			const x = event.clientX;
			const y = event.clientY;

			setCursorPosition({ x: x, y: y });

			let hoveredElement = document
				.elementFromPoint(x, y)
				?.getAttribute('data-cursor');

			if (hoveredElement !== currentHoveredEl) {
				setCurrentHoveredEl(hoveredElement || 'default');
			}
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	useEffect(() => {
		currentHoveredEl !== cursorState && handleCursorState(currentHoveredEl);
	}, [currentHoveredEl]);

	const cursorStyle: CSSProperties = {
		transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
		WebkitTransform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
	};

	const isSlowBrowser = useDetectSlowBrowsers();

	return isSlowBrowser || isNavigationMode || isMobile ? null : (
		<>
			<div
				style={cursorStyle}
				className={cn(s.cursor, currentHoveredEl === 'circle' && s.circle)}
			/>

			{['default', 'button', 'circle'].includes(currentHoveredEl) ? (
				<>
					{currentHoveredEl !== 'circle' && (
						<div
							style={cursorStyle}
							className={cn(s.aura, currentHoveredEl === 'button' && s.button)}
						/>
					)}
				</>
			) : (
				<CursorPoster currentPoster={currentHoveredEl} style={cursorStyle} />
			)}
		</>
	);
};

export default Cursor;
