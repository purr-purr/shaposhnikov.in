import { useContext } from 'react';

import AppContext from '@modules/layout/context';
import cn from 'classnames';

import messages from '@utils/messages';

import s from './AboutMe.module.scss';

const AboutMe = () => {
	const { scrollPosition, handleProjectCursor } = useContext(AppContext);

	const getActiveStateClassName = (point: number) => {
		return scrollPosition > point && s.active;
	};

	return (
		<article className={s.container}>
			<div className={cn(s.inner, getActiveStateClassName(500))}>
				<p className={s.firstLine}>
					<span className={cn('hov', getActiveStateClassName(800))}>
						{messages.HELLO}{' '}
					</span>
					<span className={cn(s.userName, getActiveStateClassName(1200))}>
						{messages.USERNAME}{' '}
					</span>
					!{' '}
					<span className={cn(s.line, getActiveStateClassName(1450))}>
						{messages.IM_A_FRONT_END_DEVELOPER}
					</span>
				</p>

				<p className={cn(s.line, getActiveStateClassName(1750))}>
					{messages.I_HAVE_MORE_THAN_THREE_YEARS}
				</p>
				<p className={cn(s.line, getActiveStateClassName(2050))}>
					{messages.AND_I_BUILD_THINGS_FOR_WEB}
				</p>
				<p className={cn(s.line, getActiveStateClassName(2350))}>
					{messages.LETS_CREATE_SOMETHING_AWESOME_TOGETHER}
				</p>
			</div>
		</article>
	);
};

export default AboutMe;
