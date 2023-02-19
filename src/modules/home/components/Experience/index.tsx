import Heading from '@modules/common/components/Heading';

import messages from '@utils/messages';

import s from './Experience.module.scss';

const Experience = () => {
	return (
		<article className={s.container} id={messages.EXPERIENCE}>
			<Heading text={messages.EXPERIENCE} />

			<p>{messages.A_FEW_OF_MY_LATEST_PROJECTS}</p>
		</article>
	);
};

export default Experience;
