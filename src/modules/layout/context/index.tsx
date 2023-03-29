import { createContext } from 'react';

type AppContextType = {
	isNavigationMode: boolean;
	scrollPosition: number;
	projectCursor: string;
	handleNavigationMode: (isNavigationMode: boolean) => void;
	handleScrollPosition: (scrollPosition: number) => void;
	handleProjectCursor: (cursorContent: string) => void;
};

const AppContext = createContext<AppContextType>({
	isNavigationMode: false,
	scrollPosition: 0,
	projectCursor: 'default',
	handleNavigationMode: () => {},
	handleScrollPosition: () => {},
	handleProjectCursor: () => {},
});

export default AppContext;
