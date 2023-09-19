import {FC, type MouseEvent} from 'react';
import Link from 'next/link';

import ArrowDefault from '@modules/icons/components/ArrowDefault';
import cn from 'classnames';

import { useMediaQuery } from '@modules/common/hooks';

import { MOBILE_BREAKPOINT } from '@utils/const';
import messages from '@utils/messages';

import s from './ProjectListItem.module.scss';

const ProjectListItem: FC<{
	title: string;
	year: number;
	use: string;
	link: string;
	onMouseEvent: (event: MouseEvent<HTMLLIElement>) => void;
	isDisabledState: boolean;
	poster: string;
}> = ({
	title,
	year,
	use,
	link,
	onMouseEvent,
	isDisabledState = true,
	poster,
}) => {
	const projectYear = year.toString();
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

	return (
		<li
			className={cn(s.container, isDisabledState && s.disabled)}
			onMouseEnter={onMouseEvent}
			onMouseLeave={onMouseEvent}
			data-cursor={poster}
		>
			<h4 className={s.title}>{title}</h4>

			{!isMobile && (
				<p
					className={cn(s.use, isDisabledState && s.disabled)}
				>{`${use} ${messages.WAS_USED}`}</p>
			)}

			<Link
				href={link}
				target="_blank"
				data-cursor={poster}
				className={cn(s.live, isDisabledState && s.disabled)}
			>
				{messages.LIVE}
				<span className={s[`live-icon`]}>
					<ArrowDefault />
				</span>
			</Link>

			<time className={s.year} dateTime={projectYear}>
				{projectYear}
			</time>
		</li>
	);
};

export default ProjectListItem;
