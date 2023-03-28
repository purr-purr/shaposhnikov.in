import { CSSProperties, useContext, useEffect, useState } from 'react';

import AppContext from '@modules/layout/context';

import { ICursorPosition } from '@modules/common/types';

import s from './Cursor.module.scss';

const Cursor = () => {
	const { isNavigationMode } = useContext(AppContext);

	const [cursorPosition, setCursorPosition] = useState<ICursorPosition>({
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

	return !isNavigationMode ? (
		<>
			<span style={cursorStyle} className={s.cursor} />
			<span style={cursorStyle} className={s.aura} />
		</>
	) : null;
};

export default Cursor;
