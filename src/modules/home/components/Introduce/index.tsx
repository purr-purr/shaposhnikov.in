import { useContext } from 'react';
import Image from 'next/image';

import AppContext from '@modules/layout/context';
import cn from 'classnames';

import { APP_TITLE } from '@utils/const';
import messages from '@utils/messages';

import s from './Introduce.module.scss';

import BG from '@modules/home/assets/introduce/web-dev.svg';

const Introduce = () => {
	const { scrollPosition, cursorState } = useContext(AppContext);

	return (
		<article className={s.container}>
			{scrollPosition < 700 && (
				<>
					<div className={s.background}>
						<figure
							className={cn(s[`background-item`], scrollPosition > 500 && s.hidden)}
						>
							<Image src={BG} alt={APP_TITLE} />
						</figure>
					</div>

					<div className={s.intro}>
						<h1
							data-cursor="circle"
							className={cn(s.heading, scrollPosition > 500 && s.hidden)}
						>
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
