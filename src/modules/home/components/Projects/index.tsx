import Heading from '@modules/common/components/Heading';

import messages from '@utils/messages';

import s from './Projects.module.scss';

const Projects = () => {
	return (
		<article className={s.container} id={messages.PROJECTS}>
			<Heading text={messages.PROJECTS} />

			<p>{messages.A_FEW_OF_MY_LATEST_PROJECTS}</p>
		</article>
	);
};

export default Projects;
