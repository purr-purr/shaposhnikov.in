import { useState } from 'react';

import ProjectListItem from '@modules/home/components/ProjectListItem';

import { PROJECTS_LIST } from '@utils/data';

import s from './ProjectList.module.scss';

const ProjectList = () => {
	const [linePosition, setLinePosition] = useState(0);

	const handleOnMouseOver = (event: any) => {
		event.preventDefault();

		if (event.target === event.currentTarget) {
			setLinePosition(event.target.offsetTop);
		}
	};

	return (
		<ul className={s.container} onMouseLeave={() => setLinePosition(0)}>
			<li className={s.line} style={{ top: `${linePosition}px` }} />
			{PROJECTS_LIST.map((item) => (
				<ProjectListItem
					key={item.title}
					title={item.title}
					poster={item.poster}
					year={item.year}
					link={item.link}
					stack={item.use}
					onMouseOver={(e) => handleOnMouseOver(e)}
				/>
			))}
		</ul>
	);
};

export default ProjectList;
