import { FC } from 'react';
import Link from 'next/link';

import ArrowDefault from '@modules/icons/components/ArrowDefault';
import cn from 'classnames';

import messages from '@utils/messages';

import s from './ProjectListItem.module.scss';

const ProjectListItem: FC<{
	title: string;
	year: number;
	use: string;
	link: string;
	onMouseEvent: (e: any) => void;
	isDisabledState: boolean;
}> = ({ title, year, use, link, onMouseEvent, isDisabledState = true }) => {
	const projectYear = year.toString();

	return (
		<li
			className={cn(s.container, isDisabledState && s.disabled)}
			onMouseEnter={onMouseEvent}
			onMouseLeave={onMouseEvent}
		>
			<h4 className={s.title}>{title}</h4>

			<p
				className={cn(s.use, isDisabledState && s.disabled)}
			>{`${use} ${messages.WAS_USED}`}</p>

			<Link
				className={cn(s.live, isDisabledState && s.disabled)}
				href={link}
				target="_blank"
			>
				{messages.LIVE}
				<span className={s[`live-icon`]}>
					<ArrowDefault />
				</span>
			</Link>

			<time dateTime={projectYear}>{projectYear}</time>
		</li>
	);
};

export default ProjectListItem;
