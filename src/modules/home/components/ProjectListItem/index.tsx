import { FC, useState } from 'react';
import Link from 'next/link';

import ArrowDefault from '@modules/icons/components/ArrowDefault';
import cn from 'classnames';

import messages from '@utils/messages';

import s from './ProjectListItem.module.scss';

const ProjectListItem: FC<{
	title: string;
	poster: string;
	year: number;
	stack: string;
	link: string;
	onMouseOver?: (e: any) => void;
}> = ({ title, poster, year, stack, link, onMouseOver }) => {
	const projectYear = year.toString();
	const [isDisable, setIsDisable] = useState(true);
	return (
		<li
			className={cn(s.container, isDisable && s.disabled)}
			onMouseOver={onMouseOver}
			onMouseEnter={() => setIsDisable(false)}
			onMouseLeave={() => setIsDisable(true)}
		>
			<Link className={s.title} href={link} target="_blank">
				<abbr title="go to website">{title}</abbr>
			</Link>

			<p
				className={cn(s.stack, isDisable && s.disabled)}
			>{`${stack} ${messages.WAS_USED}`}</p>

			<Link
				className={cn(s.live, isDisable && s.disabled)}
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
