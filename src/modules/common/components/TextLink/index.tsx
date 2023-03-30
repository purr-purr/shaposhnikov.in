import { FC } from 'react';
import Link from 'next/link';

import cn from 'classnames';

import s from './TextLink.module.scss';

const TextLink: FC<{ href: string; title: string; className?: string }> = ({
	href,
	title,
	className,
}) => {
	return (
		<Link
			data-cursor="button"
			target="_blank"
			href={href}
			className={cn(s.container, className && className)}
		>
			{title}
		</Link>
	);
};

export default TextLink;
