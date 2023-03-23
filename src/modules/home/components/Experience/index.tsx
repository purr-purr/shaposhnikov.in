import { Fragment } from 'react';

import Heading from '@modules/common/components/Heading';
import cn from 'classnames';

import { EXPERIENCE_LIST } from '@utils/data';
import messages from '@utils/messages';

import s from './Experience.module.scss';

const Experience = () => {
	return (
		<article className={s.container} id={messages.EXPERIENCE}>
			<Heading text={messages.EXPERIENCE} />

			<div className={s.info}>
				{EXPERIENCE_LIST.map((item, index) => (
					<Fragment key={index}>
						<p>{item.intro}</p>
						<ul className={s.list}>
							{item.achievement.map((achievementItem) => (
								<li
									key={achievementItem}
									className={cn('decorate-dot', 'decorate-dot--xs')}
								>
									{achievementItem}
								</li>
							))}
						</ul>
						<p>{item.description}</p>
					</Fragment>
				))}
			</div>
		</article>
	);
};

export default Experience;
