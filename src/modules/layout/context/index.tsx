import { createContext } from 'react';

type AppContextType = {
	isNavigationMode: boolean;
	isDarkMode: boolean;
	scrollPosition: number;
	handleNavigationMode: (isNavigationMode: boolean) => void;
	handleDarkMode: (isDarkMode: boolean) => void;
	handleScrollPosition: (scrollPosition: number) => void;
};

const AppContext = createContext<AppContextType>({
	isNavigationMode: false,
	isDarkMode: false,
	scrollPosition: 0,
	handleNavigationMode: () => {},
	handleDarkMode: () => {},
	handleScrollPosition: () => {},
});

export default AppContext;
