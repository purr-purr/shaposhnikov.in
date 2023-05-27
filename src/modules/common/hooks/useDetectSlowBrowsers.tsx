import { useEffect, useState } from 'react';

const useDetectSlowBrowsers = () => {
	const [isSlowBrowser, setIsSlowBrowser] = useState(false);

	useEffect(() => {
		setIsSlowBrowser(navigator.userAgent.includes('Firefox'));
	}, []);

	return isSlowBrowser;
};

export default useDetectSlowBrowsers;
