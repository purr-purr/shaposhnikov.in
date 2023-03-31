import { useContext } from 'react';
import Image from 'next/image';

import AppContext from '@modules/layout/context';
import cn from 'classnames';

import { useMediaQuery } from '@modules/common/hooks';

import { APP_TITLE, MOBILE_BREAKPOINT } from '@utils/const';
import messages from '@utils/messages';

import s from './Introduce.module.scss';

import BG from '@modules/home/assets/introduce/web-dev.svg';

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
						<figure className={cn(s[`background-item`], scrollAnimation())}>
							<Image src={BG} alt={APP_TITLE} />
						</figure>
					</div>

					<div className={s.intro}>
						<h1 data-cursor="circle" className={cn(s.heading, scrollAnimation())}>
							{messages.SHAPOSHNIKOV}
							<br />
							{messages.ANTON}
							<span className={cn(s.dot, cursorState === 'circle' && s.hidden)} />
						</h1>
					</div>
				</>
			)}
		</article>
	);
};

export default Introduce;
