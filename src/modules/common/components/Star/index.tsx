import { FC, useContext } from 'react';

import StarIcon from '@modules/icons/components/StarIcon';
import AppContext from '@modules/layout/context';

import s from './Star.module.scss';

const Star: FC<{
	degree: number;
	percent: number;
}> = ({ degree, percent }) => {
	const { isDarkMode, handleDarkMode } = useContext(AppContext);
	return (
		<figure
			className={s.container}
			onClick={() => handleDarkMode(!isDarkMode)}
			data-text={percent + '%'}
		>
			<StarIcon style={{ transform: `rotate(${degree / 10}deg)` }} />
		</figure>
	);
};

export default Star;
