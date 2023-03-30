import Heading from '@modules/common/components/Heading';
import ProjectList from '@modules/home/components/ProjectList';

import messages from '@utils/messages';

import s from './Projects.module.scss';

const Projects = () => {
	return (
		<article className={s.container} id={messages.PROJECTS}>
			<div className={s.inner}>
				<Heading text={messages.PROJECTS} />
				<p>{messages.A_FEW_OF_MY_LATEST_PROJECTS}</p>
			</div>
			<ProjectList />
		</article>
	);
};

export default Projects;
