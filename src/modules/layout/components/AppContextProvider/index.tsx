import { FC, useCallback, useState } from 'react';

import AppContext from '@modules/layout/context';

import type { ILayoutProps } from '@modules/layout/types';

const AppContextProvider: FC<ILayoutProps> = ({ children }) => {
	const [isNavigationMode, setIsNavigationMode] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);
	const [cursorState, setProjectCursor] = useState('default');

	const handleNavigationMode = useCallback((value: boolean) => {
		setIsNavigationMode(value);
	}, []);

	const handleScrollPosition = useCallback((value: number) => {
		setScrollPosition(value);
	}, []);

	const handleCursorState = useCallback((value: string) => {
		setProjectCursor(value);
	}, []);

	const context = {
		isNavigationMode,
		scrollPosition,
		cursorState,
		handleNavigationMode,
		handleScrollPosition,
		handleCursorState,
	};

	return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
