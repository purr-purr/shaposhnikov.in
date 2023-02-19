import ArrowDefault from '@modules/icons/components/ArrowDefault';
import cn from 'classnames';

import s from './ScrollToTop.module.scss';

interface IScrollToTopProps {
	isScrollDown?: boolean;
}

const ScrollToTop = ({ isScrollDown }: IScrollToTopProps) => {
	const mainBlock =
		typeof window !== 'undefined' && document.getElementById('main');

	const scrollUp = () =>
		isScrollDown &&
		mainBlock &&
		mainBlock.scrollTo({
			top: 0,
			behavior: 'smooth',
		});

	return (
		<figure
			onClick={scrollUp}
			className={cn(s.container, isScrollDown && s.isScrollDown)}
		>
			<ArrowDefault />
		</figure>
	);
};

export default ScrollToTop;
