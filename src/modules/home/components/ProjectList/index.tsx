import { useContext, useState } from 'react';

import ProjectListItem from '@modules/home/components/ProjectListItem';
import AppContext from '@modules/layout/context';

import { PROJECTS_LIST } from '@utils/data';

import s from './ProjectList.module.scss';

const ProjectList = () => {
	const { cursorState } = useContext(AppContext);
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
			{PROJECTS_LIST.map((item) => item.isVisible && (
				<ProjectListItem
					key={item.title}
					title={item.title}
					year={item.year}
					link={item.link}
					use={item.use}
					poster={item.poster}
					isDisabledState={cursorState !== item.poster}
					onMouseEvent={handleOnMouseOver}
				/>
			))}
		</ul>
	);
};

export default ProjectList;
