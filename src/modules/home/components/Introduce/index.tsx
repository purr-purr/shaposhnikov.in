import { useContext } from 'react';

import AppContext from '@modules/layout/context';
import cn from 'classnames';

import { useMediaQuery } from '@modules/common/hooks';

import { MOBILE_BREAKPOINT } from '@utils/const';
import messages from '@utils/messages';

import s from './Introduce.module.scss';

const Introduce = () => {
	const { scrollPosition, cursorState } = useContext(AppContext);
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

	const scrollAnimation = () => {
		const scrollBreakpoint = isMobile ? 100 : 500;
		return scrollPosition > scrollBreakpoint && s.hidden;
	};

	return (
		<article className={s.container}>
			{scrollPosition < 700 && (
				<>
					<div className={s.background}>
						<div className={cn(s[`background-item`], scrollAnimation())} />
					</div>

					<h1 data-cursor="circle" className={cn(s.heading, scrollAnimation())}>
						{messages.SHAPOSHNIKOV}
						<br />
						{messages.ANTON}
						<span className={cn(s.dot, cursorState === 'circle' && s.hidden)} />
					</h1>
				</>
			)}
		</article>
	);
};

export default Introduce;
