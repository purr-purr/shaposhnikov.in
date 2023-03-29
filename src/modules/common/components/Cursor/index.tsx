import { CSSProperties, FC, useContext, useEffect, useState } from 'react';
import Image from 'next/image';

import AppContext from '@modules/layout/context';

import { ICursorPosition } from '@modules/common/types';

import s from './Cursor.module.scss';

const Cursor: FC = () => {
	const { isNavigationMode, projectCursor } = useContext(AppContext);

	const [cursorPosterPath, setCursorPosterPath] = useState('default');
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

	useEffect(() => {
		projectCursor !== 'default' && setCursorPosterPath(projectCursor);
	}, [projectCursor]);

	const getPosterPath = (path: string) => {
		if (path) {
			return require(`src/modules/home/assets/projectList/projectList_${path}.jpg`);
		}
	};

	const cursorStyle: CSSProperties = {
		transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
	};

	return !isNavigationMode ? (
		<>
			<span style={cursorStyle} className={s.cursor} />
			{projectCursor !== 'default' ? (
				<Image
					src={getPosterPath(cursorPosterPath)}
					style={cursorStyle}
					alt=""
					className={s.poster}
				/>
			) : (
				<span style={cursorStyle} className={s.aura} />
			)}
		</>
	) : null;
};

export default Cursor;
