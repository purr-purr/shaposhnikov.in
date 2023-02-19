import { useContext } from 'react';

import AppContext from '@modules/layout/context';

import { NAVIGATION_LIST } from '@utils/data';

import s from './Navigation.module.scss';

const Navigation = () => {
	const { handleNavigationMode } = useContext(AppContext);
	return (
		<nav className={s.container}>
			<ul>
				{NAVIGATION_LIST.map((item) => (
					<li key={item}>
						<a
							href={`#${item.toLowerCase()}`}
							className={s.item}
							onClick={() => handleNavigationMode(false)}
						>
							{item}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
