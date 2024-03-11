import Heading from '@modules/common/components/Heading';
import ProjectList
	from '@modules/home/components/Projects/components/ProjectList';

import messages from '@utils/messages';

import s from './Projects.module.scss';

const Projects = () => {
	return (
		<article className={s.container} id={messages.PROJECTS}>
			<Heading isStatic text={messages.PROJECTS} />
			<ProjectList />
		</article>
	);
};

export default Projects;
