import messages from '@utils/messages';

import s from './NavigationButton.module.scss';

const NavigationButton = ({ ...props }) => {
	return (
		<button {...props} className={s.container}>
			{messages.MENU}
		</button>
	);
};

export default NavigationButton;
