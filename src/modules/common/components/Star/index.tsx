import { FC, useContext } from 'react';

import StarIcon from '@modules/icons/components/StarIcon';
import AppContext from '@modules/layout/context';

import s from './Star.module.scss';

const Star: FC<{
	degree: number;
}> = ({ degree }) => {
	const { isDarkMode, handleDarkMode } = useContext(AppContext);
	return (
		<figure
			className={s.container}
			style={{ transform: `rotate(${degree / 10}deg)` }}
			onClick={() => handleDarkMode(!isDarkMode)}
		>
			<StarIcon />
		</figure>
	);
};

export default Star;
