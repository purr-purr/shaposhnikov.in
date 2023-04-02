import { useContext } from 'react';

import AppContext from '@modules/layout/context';

import { NAVIGATION_LIST } from '@utils/data';

import s from './Navigation.module.scss';

const Navigation = () => {
	const { handleNavigationMode } = useContext(AppContext);
	return (
		<nav className={s.container} onClick={() => handleNavigationMode(false)}>
			<ul>
				{NAVIGATION_LIST.map((item) => (
					<li key={item}>
						<a href={`#${item.toLowerCase()}`} className={s.item}>
							{item}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
