import { createContext } from 'react';

type AppContextType = {
	isNavigationMode: boolean;
	isDarkMode: boolean;
	handleNavigationMode: (isNavigationMode: boolean) => void;
	handleDarkMode: (isDarkMode: boolean) => void;
};

const AppContext = createContext<AppContextType>({
	isNavigationMode: false,
	isDarkMode: false,
	handleNavigationMode: () => {},
	handleDarkMode: () => {},
});

export default AppContext;
