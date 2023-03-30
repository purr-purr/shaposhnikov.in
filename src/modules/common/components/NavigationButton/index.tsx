import { useContext } from 'react';

import AppContext from '@modules/layout/context';
import cn from 'classnames';

import messages from '@utils/messages';

import s from './NavigationButton.module.scss';

const NavigationButton = ({ ...props }) => {
	const { scrollPosition } = useContext(AppContext);

	return (
		<button
			{...props}
			data-cursor="button"
			className={cn(s.container, scrollPosition > 500 && s[`container--short`])}
		>
			{messages.MENU}
		</button>
	);
};

export default NavigationButton;
