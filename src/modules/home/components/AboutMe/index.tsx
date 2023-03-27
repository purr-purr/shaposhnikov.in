import { useContext } from 'react';

import AppContext from '@modules/layout/context';
import cn from 'classnames';

import messages from '@utils/messages';

import s from './AboutMe.module.scss';

const AboutMe = () => {
	const { scrollPosition } = useContext(AppContext);

	const getActiveStateClassName = (point: number) => {
		return scrollPosition > point && s.active;
	};

	return (
		<article className={s.container}>
			<div className={cn(s.inner, getActiveStateClassName(500))}>
				<p className={s.firstLine}>
					<span className={cn(getActiveStateClassName(800))}>{messages.HELLO} </span>
					<span className={cn(s.userName, getActiveStateClassName(1200))}>
						{messages.USERNAME}{' '}
					</span>
					!
					<span className={cn(s.line, getActiveStateClassName(1450))}>
						{messages.GLAD_TO_SEE_YOU_HERE}
					</span>
				</p>

				<p className={cn(s.line, getActiveStateClassName(1750))}>
					{messages.MY_NAME_IS_ANTON}
				</p>
				<p className={cn(s.line, getActiveStateClassName(2050))}>
					{messages.I_AM_CURRENTLY_OPEN_TO_NEW_OPPORTUNITIES}
				</p>
				<p className={cn(s.line, getActiveStateClassName(2350))}>
					{messages.I_WILL_BE_GLAD_TO_COOPERATE}
				</p>
			</div>
		</article>
	);
};

export default AboutMe;
