import {FC} from 'react';

import s from './Heading.module.scss';
import cn from "classnames";
import {useMediaQuery} from "@modules/common/hooks";
import {LAPTOP_BREAKPOINT} from "@utils/const";

const Heading: FC<{
	text: string;
	isStatic?: boolean;
}> = ({ text, isStatic = false }) => {
	const isLaptop = useMediaQuery(LAPTOP_BREAKPOINT);
	return (
		<h2 className={cn(s.container, isStatic && !isLaptop && s[`container--static`])} data-text={text}>
			{text}
		</h2>
	);
};

export default Heading;
