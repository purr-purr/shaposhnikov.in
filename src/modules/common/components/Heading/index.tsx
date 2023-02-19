import { FC } from 'react';

import s from './Heading.module.scss';

const Heading: FC<{
	text: string;
}> = ({ text }) => {
	return (
		<h2 className={s.container} data-text={text}>
			{text}
		</h2>
	);
};

export default Heading;
