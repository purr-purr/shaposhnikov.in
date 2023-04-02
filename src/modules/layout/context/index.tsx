import { createContext } from 'react';

type AppContextType = {
	isNavigationMode: boolean;
	scrollPosition: number;
	cursorState: string;
	handleNavigationMode: (isNavigationMode: boolean) => void;
	handleScrollPosition: (scrollPosition: number) => void;
	handleCursorState: (cursorState: string) => void;
};

const AppContext = createContext<AppContextType>({
	isNavigationMode: false,
	scrollPosition: 0,
	cursorState: 'default',
	handleNavigationMode: () => {},
	handleScrollPosition: () => {},
	handleCursorState: () => {},
});

export default AppContext;
