import Heading from '@modules/common/components/Heading';
import cn from 'classnames';

import { SKILLS_LIST } from '@utils/data';
import messages from '@utils/messages';

import s from './Skills.module.scss';

const Skills = () => {
	return (
		<article className={s.container} id={messages.SKILLS}>
			<Heading text={messages.SKILLS} />

			<ul className={s.list}>
				{SKILLS_LIST.map((item) => (
					<li key={item.title} className={cn(s[`list-item`], 'decorate-dot')}>
						<p className={s[`list-title`]}>{`${item.title}:`}</p>
						<ul>
							{item.list.map((skillItem) => (
								<li
									key={skillItem}
									className={s[`list-subItem`]}
								>{`- ${skillItem}`}</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</article>
	);
};

export default Skills;
