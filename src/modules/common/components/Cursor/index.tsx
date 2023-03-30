import { CSSProperties, FC, useContext, useEffect, useState } from 'react';
import Image from 'next/image';

import AppContext from '@modules/layout/context';
import cn from 'classnames';

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
		if (projectCursor !== 'default' && projectCursor !== 'large-dot') {
			setCursorPosterPath(projectCursor);
		}
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
			<span
				style={cursorStyle}
				className={cn(s.cursor, projectCursor === 'large-dot' && s.largeDot)}
			/>

			{projectCursor !== 'default' && projectCursor !== 'large-dot' ? (
				<Image
					src={getPosterPath(cursorPosterPath)}
					style={cursorStyle}
					alt=""
					className={s.poster}
				/>
			) : (
				<>
					{projectCursor !== 'large-dot' && (
						<span style={cursorStyle} className={s.aura} />
					)}
				</>
			)}
		</>
	) : null;
};

export default Cursor;
