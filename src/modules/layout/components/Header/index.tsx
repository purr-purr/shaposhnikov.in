import s from './Header.module.scss';
import Navigation from "@modules/common/components/Navigation";
import NavigationButton from "@modules/common/components/NavigationButton";
import {useContext} from "react";
import AppContext from "@modules/layout/context";
import cn from "classnames";

const Header = () => {
	const { isNavigationMode, handleNavigationMode } = useContext(AppContext);

	return (
		<header className={cn(s.container, isNavigationMode && s.offMixBlendMode)}>
			{isNavigationMode ? (
				<Navigation />
			) : (
				<NavigationButton onClick={()=> handleNavigationMode(true)} />
			)}
		</header>
	);
};

export default Header;
