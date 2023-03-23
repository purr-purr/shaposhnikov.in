import { createContext } from 'react';

type AppContextType = {
	isNavigationMode: boolean;
	isDarkMode: boolean;
	isScrollPosition: number;
	handleNavigationMode: (isNavigationMode: boolean) => void;
	handleDarkMode: (isDarkMode: boolean) => void;
	handleScrollPosition: (isScrollPosition: number) => void;
};

const AppContext = createContext<AppContextType>({
	isNavigationMode: false,
	isDarkMode: false,
	isScrollPosition: 0,
	handleNavigationMode: () => {},
	handleDarkMode: () => {},
	handleScrollPosition: () => {},
});

export default AppContext;
