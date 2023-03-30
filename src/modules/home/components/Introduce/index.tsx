import { useContext } from 'react';
import Image from 'next/image';

import AppContext from '@modules/layout/context';
import cn from 'classnames';

import { APP_TITLE } from '@utils/const';
import messages from '@utils/messages';

import s from './Introduce.module.scss';

import BG from '@modules/home/assets/introduce/web-dev.svg';

const Introduce = () => {
	const { scrollPosition, handleProjectCursor, projectCursor } =
		useContext(AppContext);

	const handleCursorState = (state: string) => {
		state !== projectCursor && handleProjectCursor(state);
	};

	const handleOnMouseOver = (event: any) => {
		// event.preventDefault();

		if (event.target === event.currentTarget) {
			console.log(event.currentTarget);
			handleCursorState('large-dot');
		} else {
			console.log(event.currentTarget);
			handleCursorState('default');
		}
	};

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
						<div className={s[`intro-inner`]}>
							<div className={cn(s.heading, scrollPosition > 500 && s.hidden)}>
								<h1
									data-custom="large-dot"
									className="large-dot"
									onMouseOver={() => handleCursorState('large-dot')}
									onMouseOut={() => handleCursorState('default')}
									onFocus={() => handleCursorState('large-dot')}
									onBlur={() => handleCursorState('default')}
									// onMouseOver={(e) => handleOnMouseOver(e)}
									// onMouseOut={(e) => handleOnMouseOver(e)}
								>
									{messages.SHAPOSHNIKOV}
									<br />
									{messages.ANTON}
									<span
										className={cn(s.dot, projectCursor === 'large-dot' && s.hidden)}
									/>
								</h1>
							</div>
						</div>
					</div>
				</>
			)}
		</article>
	);
};

export default Introduce;
