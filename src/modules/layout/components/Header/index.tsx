import { useContext } from 'react';
import Head from 'next/head';

import Navigation from '@modules/common/components/Navigation';
import NavigationButton from '@modules/common/components/NavigationButton';
import AppContext from '@modules/layout/context';
import cn from 'classnames';

import { APP_TITLE } from '@utils/const';
import messages from '@utils/messages';

import s from './Header.module.scss';

const Header = () => {
	const { isNavigationMode, handleNavigationMode } = useContext(AppContext);

	return (
		<header className={cn(s.container, isNavigationMode && s.offMixBlendMode)}>
			{isNavigationMode ? (
				<>
					<Head>
						<title>{`${messages.NAVIGATION} | ${APP_TITLE}`}</title>
						<meta content="#FF0F00" name="theme-color" />
					</Head>
					<Navigation />
				</>
			) : (
				<NavigationButton onClick={() => handleNavigationMode(true)} />
			)}
		</header>
	);
};

export default Header;
