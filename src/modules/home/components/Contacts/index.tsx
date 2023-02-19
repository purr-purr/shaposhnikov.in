import Heading from '@modules/common/components/Heading';

import { APP_AUTHOR_EMAIL } from '@utils/const';
import messages from '@utils/messages';

import s from './Contacts.module.scss';

const Contacts = () => {
	return (
		<article className={s.container} id={messages.CONTACTS}>
			<Heading text={messages.SAY_HELLO} />

			<a
				className={s.email}
				target="_blank"
				href={`mailto:${APP_AUTHOR_EMAIL}`}
				rel="noreferrer"
			>
				{APP_AUTHOR_EMAIL}
			</a>
		</article>
	);
};

export default Contacts;
