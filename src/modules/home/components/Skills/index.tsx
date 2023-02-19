import Heading from '@modules/common/components/Heading';

import messages from '@utils/messages';

import s from './Skills.module.scss';

const Skills = () => {
	return (
		<article className={s.container} id={messages.SKILLS}>
			<Heading text={messages.SKILLS} />

			<p>{messages.A_FEW_OF_MY_LATEST_PROJECTS}</p>
		</article>
	);
};

export default Skills;
