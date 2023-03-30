import { CSSProperties, FC, useContext, useEffect, useState } from 'react';
import Image from 'next/image';

import AppContext from '@modules/layout/context';
import cn from 'classnames';

import messages from '@utils/messages';

import { ICursorPosition } from '@modules/common/types';

import s from './Cursor.module.scss';

const Cursor: FC = () => {
	const { isNavigationMode, cursorState, handleCursorState } =
		useContext(AppContext);

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
		console.log(currentHoveredEl);
		currentHoveredEl !== cursorState && handleCursorState(currentHoveredEl);
	}, [currentHoveredEl]);

	const getPosterPath = (path: string) => {
		return (
			path &&
			require(`src/modules/home/assets/projectList/projectList_${path}.jpg`)
		);
	};

	const cursorStyle: CSSProperties = {
		transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
	};

	return isNavigationMode ? null : (
		<>
			<span
				style={cursorStyle}
				className={cn(s.cursor, currentHoveredEl === 'circle' && s.circle)}
			/>

			{currentHoveredEl === 'default' ||
			currentHoveredEl === 'button' ||
			currentHoveredEl === 'circle' ? (
				<>
					{currentHoveredEl !== 'circle' && (
						<span
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
