import Heading from '@modules/common/components/Heading';
import TextLink from '@modules/common/components/TextLink';

import { APP_AUTHOR_EMAIL } from '@utils/const';
import messages from '@utils/messages';

import s from './Contacts.module.scss';

const Contacts = () => {
	return (
		<article className={s.container} id={messages.CONTACTS}>
			<div className={s.inner}>
				<Heading text={messages.SAY_HELLO} />

				<TextLink
					href={`mailto:${APP_AUTHOR_EMAIL}`}
					title={APP_AUTHOR_EMAIL}
					className={s.email}
				/>
			</div>
		</article>
	);
};

export default Contacts;
