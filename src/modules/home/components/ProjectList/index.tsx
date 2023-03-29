import { useContext, useState } from 'react';

import ProjectListItem from '@modules/home/components/ProjectListItem';
import AppContext from '@modules/layout/context';

import { PROJECTS_LIST } from '@utils/data';

import s from './ProjectList.module.scss';

const ProjectList = () => {
	const { projectCursor, handleProjectCursor } = useContext(AppContext);
	const [linePosition, setLinePosition] = useState(0);

	const handleOnMouseOver = (event: any, poster: string) => {
		event.preventDefault();

		if (event.target === event.currentTarget) {
			setLinePosition(event.target.offsetTop);
			projectCursor !== poster && handleProjectCursor(poster);
		}
	};

	const handleMouseLeave = () => {
		handleProjectCursor('default');
		setLinePosition(0);
	};

	return (
		<ul className={s.container} onMouseLeave={handleMouseLeave}>
			<li className={s.line} style={{ top: `${linePosition}px` }} />
			{PROJECTS_LIST.map((item) => (
				<ProjectListItem
					key={item.title}
					title={item.title}
					year={item.year}
					link={item.link}
					use={item.use}
					isDisabledState={projectCursor !== item.poster}
					onMouseEvent={(e) => handleOnMouseOver(e, item.poster)}
				/>
			))}
		</ul>
	);
};

export default ProjectList;
