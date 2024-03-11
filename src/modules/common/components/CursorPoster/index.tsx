import {type CSSProperties, FC, useState} from 'react';
import Image from 'next/image';

import cn from 'classnames';

import messages from '@utils/messages';

import s from './CursorPoster.module.scss';

const CursorPoster: FC<{ currentPoster: string; style: CSSProperties }> = ({
	currentPoster,
	style,
}) => {
	const [isLoading, setIsLoading] = useState(true);

	const getPosterPath = (path: string) => {
		return (
			path &&
			require(`src/modules/home/components/Projects/assets/projectList_${path}.jpg`)
		);
	};

	return (
		<>
			{isLoading && (
				<p style={style} className={cn(s.container, s.preloader)}>
					{messages.LOADING}
				</p>
			)}

			<Image
				src={getPosterPath(currentPoster)}
				style={style}
				alt={messages.POSTER}
				className={cn(s.container, s.poster, isLoading && s.hiding)}
				onLoad={() => setIsLoading(false)}
			/>
		</>
	);
};

export default CursorPoster;
