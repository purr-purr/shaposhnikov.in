import { createContext } from 'react';

type AppContextType = {
	isNavigationMode: boolean;
	scrollPosition: number;
	handleNavigationMode: (isNavigationMode: boolean) => void;
	handleScrollPosition: (scrollPosition: number) => void;
};

const AppContext = createContext<AppContextType>({
	isNavigationMode: false,
	scrollPosition: 0,
	handleNavigationMode: () => {},
	handleScrollPosition: () => {},
});

export default AppContext;
