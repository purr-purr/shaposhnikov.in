import { Fragment } from 'react';

import Heading from '@modules/common/components/Heading';
import TextLink from '@modules/common/components/TextLink';
import cn from 'classnames';

import { APP_AUTHOR_CV } from '@utils/const';
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
						<p dangerouslySetInnerHTML={{ __html: item.intro }}/>
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
						<p>
							{messages.IF_YOU_LIKE_TO_LEARN_MORE_ABOUT_MY_WORK_EXPERIENCE}{' '}
							<TextLink
								href={APP_AUTHOR_CV}
								className={s.link}
								title={messages.LINK}
							/>{' '}
							{messages.TO_VIEW_MY_CV}
						</p>
					</Fragment>
				))}
			</div>
		</article>
	);
};

export default Experience;
