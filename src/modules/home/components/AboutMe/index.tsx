import cn from 'classnames';

import messages from '@utils/messages';

import s from './AboutMe.module.scss';

const AboutMe = () => {
	return (
		<article className={s.container}>
			<div className={s.inner}>
				<p>
					{messages.HELLO}{' '}
					<span className={cn(s.userName, s.active)}>{messages.USERNAME}! </span>
					<span>{messages.GLAD_TO_SEE_YOU_HERE}</span>
				</p>

				<p>{messages.MY_NAME_IS_ANTON}</p>
				<p>{messages.I_AM_CURRENTLY_OPEN_TO_NEW_OPPORTUNITIES}</p>
				<p>{messages.I_WILL_BE_GLAD_TO_COOPERATE}</p>
			</div>
		</article>
	);
};

export default AboutMe;
