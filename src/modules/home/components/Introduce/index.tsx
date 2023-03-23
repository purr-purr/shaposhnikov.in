import { useContext } from 'react';
import Image from 'next/image';

import AppContext from '@modules/layout/context';

import { APP_TITLE } from '@utils/const';

import s from './Introduce.module.scss';

import BG from '@modules/home/assets/introduce/web-dev.svg';

const Introduce = () => {
	const { isScrollPosition } = useContext(AppContext);

	return (
		<article className={s.container}>
			{isScrollPosition < 300 && (
				<div className={s.background}>
					<figure className={s[`background-item`]}>
						<Image src={BG} alt={APP_TITLE} />
					</figure>
				</div>
			)}

			<div className={s.intro}>
				<div className={s[`intro-inner`]}>
					<div className={s.heading}>
						<h1>
							Shaposhnikov <br /> Anton
							<span className="red-dot" />
						</h1>
					</div>
				</div>
			</div>
		</article>
	);
};

export default Introduce;
