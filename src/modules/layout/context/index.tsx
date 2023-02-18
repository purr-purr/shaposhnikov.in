import { createContext } from 'react';

type AppContextType = {
	isNavigationMode: boolean;
	handleNavigationMode: (isDarkMode: boolean) => void;
};

const AppContext = createContext<AppContextType>({
	isNavigationMode: false,
	handleNavigationMode: () => {},
});

export default AppContext;
