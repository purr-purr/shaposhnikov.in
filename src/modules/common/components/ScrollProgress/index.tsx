import { FC, useContext, useEffect, useState } from 'react';

import StarIcon from '@modules/icons/components/StarIcon';
import AppContext from '@modules/layout/context';

import s from './ScrollProgress.module.scss';

const ScrollProgress: FC = () => {
	const { scrollPosition, handleScrollPosition, handleProjectCursor } =
		useContext(AppContext);
	const [scrolledPercent, setScrolledPercent] = useState(0);

	const mainBlock =
		typeof document !== 'undefined' ? document.getElementById('main') : null;

	const handleScrollTo = () => {
		mainBlock?.scrollTo({
			top: scrolledPercent > 90 ? 0 : mainBlock.scrollHeight,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		const handleScroll = (event: any) => {
			const { scrollHeight, scrollTop, clientHeight } = event.target;
			handleScrollPosition(scrollTop);

			const scrollBeginning = Math.max(scrollTop, 0);
			const totalHeight = scrollHeight - clientHeight;
			const scrollPercent = Math.round((scrollBeginning / totalHeight) * 100);
			setScrolledPercent(scrollPercent);
		};

		mainBlock?.addEventListener('scroll', handleScroll);

		return () => {
			mainBlock?.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<figure
			className={s.container}
			onClick={handleScrollTo}
			data-text={scrolledPercent + '%'}
		>
			<StarIcon style={{ transform: `rotate(${scrollPosition / 10}deg)` }} />
		</figure>
	);
};

export default ScrollProgress;
