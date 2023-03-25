import { useContext } from 'react';

import Navigation from '@modules/common/components/Navigation';
import NavigationButton from '@modules/common/components/NavigationButton';
import AppContext from '@modules/layout/context';
import cn from 'classnames';

import s from './Header.module.scss';

const Header = () => {
	const { isNavigationMode, handleNavigationMode } = useContext(AppContext);

	return (
		<header className={cn(s.container, isNavigationMode && s.offMixBlendMode)}>
			{isNavigationMode ? (
				<Navigation />
			) : (
				<NavigationButton onClick={() => handleNavigationMode(true)} />
			)}
		</header>
	);
};

export default Header;
