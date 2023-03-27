import { FC } from 'react';

import StarIcon from '@modules/icons/components/StarIcon';

import s from './Star.module.scss';

const Star: FC<{
	degree: number;
	percent: number;
}> = ({ degree, percent }) => {
	const handleScrollPosition = () => {
		const mainBlock =
			typeof window !== 'undefined' && document.getElementById('main');

		if (mainBlock) {
			mainBlock.scrollTo({
				top: percent > 90 ? 0 : mainBlock.scrollHeight,
				behavior: 'smooth',
			});
		}
	};

	return (
		<figure
			className={s.container}
			onClick={handleScrollPosition}
			data-text={percent + '%'}
		>
			<StarIcon style={{ transform: `rotate(${degree / 10}deg)` }} />
		</figure>
	);
};

export default Star;
