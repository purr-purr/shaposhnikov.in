import { useContext } from 'react';

import AppContext from '@modules/layout/context';
import cn from 'classnames';

import { useMediaQuery } from '@modules/common/hooks';

import { MOBILE_BREAKPOINT } from '@utils/const';
import messages from '@utils/messages';

import s from './AboutMe.module.scss';

const AboutMe = () => {
	const { scrollPosition } = useContext(AppContext);
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

	const getActiveStateClassName = (point: number) => {
		if (isMobile) {
			return s.active;
		} else {
			return scrollPosition > point && s.active;
		}
	};

	return (
		<article className={s.container}>
			<div className={cn(s.inner, getActiveStateClassName(500))}>
				<p className={s.firstLine}>
					<span className={cn(getActiveStateClassName(800))}>{messages.HELLO} </span>
					<span className={cn(s.userName, getActiveStateClassName(1200))}>
						{messages.USERNAME}{' '}
					</span>
					!{' '}
				</p>
				<p className={cn(s.line, getActiveStateClassName(1500))}>
					{messages.IM_A_FRONT_END_DEVELOPER}
				</p>

				<p className={cn(s.line, getActiveStateClassName(1800))}>
					{messages.WITH_A_SOLID_THREE_YEARS_IN_THE_INDUSTRY}
				</p>
				<p className={cn(s.line, getActiveStateClassName(2100))}>
					{messages.MY_PASSION}
				</p>
				<p className={cn(s.line, getActiveStateClassName(2350))}>
					{messages.LETS_TEAM_UP}
				</p>
			</div>
		</article>
	);
};

export default AboutMe;
