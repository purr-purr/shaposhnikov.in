import { CSSProperties, FC, useContext, useEffect, useState } from 'react';
import Image from 'next/image';

import AppContext from '@modules/layout/context';
import cn from 'classnames';

import { useMediaQuery } from '@modules/common/hooks';

import { MOBILE_BREAKPOINT } from '@utils/const';
import messages from '@utils/messages';

import { ICursorPosition } from '@modules/common/types';

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

	const getPosterPath = (path: string) => {
		return (
			path &&
			require(`src/modules/home/assets/projectList/projectList_${path}.jpg`)
		);
	};

	const cursorStyle: CSSProperties = {
		transform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px), 0`,
		WebkitTransform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)`,
	};

	return isNavigationMode || isMobile ? null : (
		<>
			<div
				style={cursorStyle}
				className={cn(s.cursor, currentHoveredEl === 'circle' && s.circle)}
			/>

			{currentHoveredEl === 'default' ||
			currentHoveredEl === 'button' ||
			currentHoveredEl === 'circle' ? (
				<>
					{currentHoveredEl !== 'circle' && (
						<div
							style={cursorStyle}
							className={cn(s.aura, currentHoveredEl === 'button' && s.button)}
						/>
					)}
				</>
			) : (
				<Image
					src={getPosterPath(currentHoveredEl)}
					style={cursorStyle}
					alt={messages.POSTER}
					className={s.poster}
				/>
			)}
		</>
	);
};

export default Cursor;
