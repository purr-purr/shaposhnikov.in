import { FC, useCallback, useState } from 'react';

import AppContext from '@modules/layout/context';

import { ILayoutProps } from '@modules/layout/types';

const AppContextProvider: FC<ILayoutProps> = ({ children }) => {
	const [isNavigationMode, setIsNavigationMode] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);
	const [projectCursor, setProjectCursor] = useState('default');

	const handleNavigationMode = useCallback((value: boolean) => {
		setIsNavigationMode(value);
	}, []);

	const handleScrollPosition = useCallback((value: number) => {
		setScrollPosition(value);
	}, []);

	const handleProjectCursor = useCallback((value: string) => {
		setProjectCursor(value);
	}, []);

	const context = {
		isNavigationMode,
		scrollPosition,
		projectCursor,
		handleNavigationMode,
		handleScrollPosition,
		handleProjectCursor,
	};

	return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
